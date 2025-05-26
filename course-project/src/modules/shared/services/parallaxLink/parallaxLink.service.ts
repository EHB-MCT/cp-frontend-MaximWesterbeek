import { parallaxLinkType } from "./parallaxLink.service.types";

class ParallaxLinkService {
    async getParallaxLinkItems(): Promise<parallaxLinkType[]> {
        const response = await fetch("https://raw.githubusercontent.com/EHB-MCT/cp-frontend-MaximWesterbeek/refs/heads/main/course-project/public/api/fairytaleList.json");
        if (!response.ok) {
            throw new Error("Failed to fetch fairytale list");
        }

        const fairytaleList = await response.json();

        const items: parallaxLinkType[] = fairytaleList.map((item: any) => ({
            id: item.id,
            fairytaleLink: item.fairytaleLink,
        }));

        return items;
    }
}
export const parallaxLinkService = new ParallaxLinkService();