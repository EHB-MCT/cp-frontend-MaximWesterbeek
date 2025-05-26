import { makingOfItemsType } from "./makingOfItems.service.types";

class MakingOfItemsService {
    async getMakingOfItems(): Promise<makingOfItemsType[]> {
        const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
        if (!response.ok) {
            throw new Error("Failed to fetch fairytale list");
        }

        const fairytaleList = await response.json();

        const items: makingOfItemsType[] = fairytaleList.map((item: any) => ({
            id: item.id,
            nameStudent: item.nameStudent,
            fairytale: item.fairytale,
            description: item.description,
            videoExplainer: item.videoExplainer,
            imgBanner: item.imgBanner,
            imgsExtra: item.imgsExtra,
        }));

        return items;
    }
}
export const makingOfItemsService = new MakingOfItemsService();