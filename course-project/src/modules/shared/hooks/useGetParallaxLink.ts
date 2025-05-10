import { useQuery } from "@tanstack/react-query"
import { parallaxLinkService } from "../services"

export const useGetParallaxLink = () => {
    return useQuery({
        queryKey: ['parallaxLinkItems'],
        queryFn: parallaxLinkService.getParallaxLinkItems
    })
}