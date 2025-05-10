import { useQuery } from "@tanstack/react-query"
import { makingOfItemsService } from "../services"

export const useGetMakingOfItems = () => {
    return useQuery({
        queryKey: ['makingOfItems'],
        queryFn: makingOfItemsService.getMakingOfItems
    })
}