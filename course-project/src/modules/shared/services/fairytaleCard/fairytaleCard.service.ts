import { FairytaleCardType } from "./fairytaleCard.service.types";

class FairytaleCardService {
    async getFairytaleCardItems(): Promise<FairytaleCardType[]> {
        const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
        if (!response.ok) {
            throw new Error("Failed to fetch fairytale list");
        }

        const data: FairytaleCardType[] = await response.json();

        return data;
    }
}
export const fairytaleCardService = new FairytaleCardService();