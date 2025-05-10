import fairytaleList from "~/shared/mock/fairytaleList.json";
import { parallaxLinkType } from "./parallaxLink.service.types";

class ParallaxLinkService {
    getParallaxLinkItems(): Promise<parallaxLinkType[]> {
        return new Promise<parallaxLinkType[]>((resolve) => {
            resolve(
                fairytaleList.map((item) => ({
                    id: item.id,
                    fairytaleLink: item.fairytaleLink
                }))
            );
        });
    }
}
export const parallaxLinkService = new ParallaxLinkService();