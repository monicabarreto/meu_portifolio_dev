
import { useQuery } from '@tanstack/react-query'

export function useBannerData() {
  return useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await fetch("/api/banner")
      if (!res.ok) throw new Error("Erro ao buscar banner")
      return res.text()
    },
  })
}
