import fairytaleList from "~/shared/mock/fairytaleList.json";
import { makingOfItemsType } from "./makingOfItems.service.types";

class MakingOfItemsService {
    getMakingOfItems(): Promise<makingOfItemsType[]> {
        return new Promise<makingOfItemsType[]>((resolve) => {
            setTimeout(() => {
                resolve(
                    fairytaleList.map((item) => ({
                        id: item.id,
                        nameStudent: item.nameStudent,
                        fairytale: item.fairytale,
                        description: item.description,
                        videoExplainer: item.videoExplainer,
                        imgBanner: item.imgBanner,
                        imgsExtra: item.imgsExtra,
                    }))
                );
            }, 2000);
        });
    }
}
export const makingOfItemsService = new MakingOfItemsService();