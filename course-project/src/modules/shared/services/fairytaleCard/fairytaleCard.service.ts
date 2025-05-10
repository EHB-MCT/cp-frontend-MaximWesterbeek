import fairytaleList from "~/shared/mock/fairytaleList.json";
import { FairytaleCardType } from "./fairytaleCard.service.types";

class FairytaleCardService {
    getFairytaleCardItems(): Promise<FairytaleCardType[]> {
        return new Promise<FairytaleCardType[]>((resolve) => {
            setTimeout(() => {
                resolve((fairytaleList));
            }, 2000);
        });
    }
}
export const fairytaleCardService = new FairytaleCardService();