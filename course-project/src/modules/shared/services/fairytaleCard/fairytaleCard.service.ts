import { FairytaleCardType } from "./fairytaleCard.service.types";

class FairytaleCardService {
    async getFairytaleCardItems(): Promise<FairytaleCardType[]> {
        const response = await fetch("/api/fairytaleList.json");
        if (!response.ok) {
            throw new Error("Failed to fetch fairytale list");
        }
        const data: FairytaleCardType[] = await response.json();
        return data;
    }
}
export const fairytaleCardService = new FairytaleCardService();