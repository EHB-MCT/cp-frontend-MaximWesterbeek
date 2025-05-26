import { HorizontalBirdFlying, HorizontalDrifting, HorizontalMaskT, HorizontalScrollT, StorySection, VerticalImageScrollT, VerticalScrollT, VerticalTextAppearT, VerticalWipeT } from '~/components/parallax';
import styles from '~styles/pages/parallaxPage.module.scss';

export const ParallaxPage = () => {
    const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/parallax/${filename}`;

    return (
        <div className={styles['parallax-container']}>
            <VerticalWipeT
                topImage={asset("story_part-0.jpg")}
                bottomImage={asset("story_part-01.png")}
                text="Er was eens een vrouw die vurig verlangde naar een kindje. Een heks gaf haar een bijzondere gerstekorrel, die ze plantte."
                heading="Duimelijntje"
                showStart={true}
                showEnd={false}
            />

            <StorySection
                text="Daaruit groeide een prachtige bloem, en middenin zat een meisje, niet groter dan een duim: Duimelijntje."
                height="100px"
            />

            <VerticalScrollT imgUrl={asset("story_part-02.png")} />

            <StorySection
                text="Ze leefde gelukkig, spelend op een bord met bloemen en zingend als een engel."
                height="100px"
            />

            <HorizontalDrifting
                imgUrl={asset("story_part-03_bg.png")}
                driftUrl={asset("story_part-03_drift.png")}
            />

            <StorySection text="" height="100px" />

            <HorizontalScrollT
                topImage={asset("story_part-04.png")}
                bottomImage={asset("story_part-05.png")}
                text1="Maar op een nacht werd ze ontvoerd door een lelijke pad, die haar aan haar zoon wilde uithuwelijken."
                text2="Op een plompenblad werd ze achtergelaten op de rivier. Gelukkig bevrijdden visjes haar door de steel van het blad door te knagen. Zo dreef ze verder, ver van de pad."
            />

            <StorySection
                text="Onderweg werd ze meegenomen door een kever. Hij ging met haar op het grootste blad van de boom zitten, gaf haar honing uit de bloemen te eten en zei dat ze erg lief was, al leek ze dan ook helemaal niet op een kever. Maar zijn soortgenoten vonden haar lelijk, en hij liet haar achter op een bloem"
                height="200px"
            />

            <VerticalScrollT imgUrl={asset("story_part-06.png")} />

            <StorySection text="" height="100px" />

            <HorizontalMaskT
                topImage={asset("story_part-07.png")}
                bottomImage={asset("story_part-08.png")}
                text1="Verdrietig, maar dapper leefde ze de zomer door in het bos. Toen de winter kwam, vond ze onderdak bij een vriendelijke veldmuis, die haar opnam, mits ze verhaaltjes vertelde en het huis bijhield."
                text2="De mol, een rijke, donkere heer, kwam vaak op bezoek en wilde met haar trouwen. Duimelijntje wilde dat niet, want hij hield niet van bloemen of zon."
            />

            <StorySection
                text="In een gang vonden ze een dode zwaluw. Haar mooie vleugels waren stevig tegen haar zijden gedrukt, kop en poten had zij onder haar veren getrokken; het arme dier was zeker van de kou gestorven."
                height="150px"
            />

            <VerticalScrollT imgUrl={asset("story_part-09.png")} />

            <StorySection
                text="'s Nachts kon Duimelijntje niet slapen. Ze vlocht een hooi-dekentje, legde het over het dode vogeltje en maakte het warm met watten uit de veldmuis haar kamer. Toen legde ze haar hoofd tegen het vogeltje, en schrok: het hartje klopte nog! De zwaluw was niet dood, ze kwam weer bij van de koude."
                height="200px"
            />

            <VerticalTextAppearT imgUrl={asset("story_part-10.png")} />

            <StorySection
                text="Toen het lente werd, vloog de zwaluw uit en bood haar aan mee te nemen. Maar uit dankbaarheid voor de veldmuis bleef ze. Toch bleef haar hart vol verdriet. De mol wilde met haar trouwen en alles werd voor de bruiloft voorbereid, maar zij wilde dat helemaal niet."
                height="200px"
            />

            <VerticalScrollT imgUrl={asset("story_part-11.png")} />

            <StorySection
                text="Op de dag van het huwelijk, toen ze buiten nog één keer de zonnestralen zag, kwam plots de zwaluw terug."
                height="100px"
            />

            <VerticalImageScrollT imgUrl={asset("story_part-12.png")} />

            <StorySection
                text="Duimelijntje sprong op zijn rug en samen vlogen ze ver weg."
                height="100px"
            />

            <HorizontalBirdFlying
                imgUrl={asset("story_part-13_bg.png")}
                birdUrl={asset("story_part-13_bird.png")}
            />

            <StorySection
                text="Ze kwamen in een zonovergoten land waar bloemen bloeiden en vogels zongen. Daar in een bloem ontmoette Duimelijntje een klein bloemenmannetje, koning van de bloemenvolk. Hij vroeg haar ten huwelijk, gaf haar vleugeltjes, en ze werd koningin van het bloemenvolkje."
                height="200px"
            />

            <VerticalWipeT
                topImage={asset("story_part-14.png")}
                bottomImage={asset("story_part-15.jpg")}
                text="Zo leefde Duimelijntje gelukkig - klein, fijn en vrij - in het land van zon en bloemen."
                heading="Einde"
                showStart={false}
                showEnd={true}
            />
        </div>
    );
};