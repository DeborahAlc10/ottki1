import { useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref", "fbclid", "gclid", "ttclid"];

export function useUtmNavigate() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (to: string) => {
      const currentParams = new URLSearchParams(location.search);
      const targetParams = new URLSearchParams();

      UTM_PARAMS.forEach((key) => {
        const val = currentParams.get(key);
        if (val) targetParams.set(key, val);
      });

      const search = targetParams.toString();
      navigate(to + (search ? `?${search}` : ""));
    },
    [navigate, location.search]
  );
}

export function useUtmHref(baseUrl: string): string {
  const location = useLocation();

  return useMemo(() => {
    const currentParams = new URLSearchParams(location.search);
    const url = new URL(baseUrl);

    UTM_PARAMS.forEach((key) => {
      const val = currentParams.get(key);
      if (val) {
        url.searchParams.set(key, val);
      } else if (url.searchParams.get(key) === "") {
        url.searchParams.delete(key);
      }
    });

    return url.toString();
  }, [baseUrl, location.search]);
}
