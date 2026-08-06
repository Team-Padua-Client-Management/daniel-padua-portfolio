export type CardTheme = "orig" | "white" | "black";

export interface CardFaceSet {
    front: string;
    back: string;
}

export const CARD_FACES: Record<CardTheme, CardFaceSet> = {
    orig: {
        front: "/images/card-orig.png",
        back: "/images/card-orig-back.png",
    },
    white: {
        front: "/images/cpc-card.png",
        back: "/images/cpc-card-back.png",
    },
    black: {
        front: "/images/cpc-cardblack.png",
        back: "/images/cpc-card-backblack.png",
    },
};

export const THEME_LABEL: Record<CardTheme, string> = {
    orig: "Original",
    white: "Classic White",
    black: "Executive Black",
};

export const THEME_ACCENT: Record<CardTheme, string> = {
    orig: "#d4af37",
    white: "#f4f1ea",
    black: "#0b0b0d",
};