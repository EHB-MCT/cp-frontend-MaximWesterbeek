import { useQuery } from "@tanstack/react-query"
import { fairytaleCardService } from "../services"

export const useGetFairytaleCardItems = () => {
    return useQuery({
        queryKey: ['fairytaleCardItems'],
        queryFn: fairytaleCardService.getFairytaleCardItems
    })
}