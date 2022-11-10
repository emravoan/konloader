export const qs = document.querySelector.bind(document);
export const qsa = document.querySelectorAll.bind(document);

export interface IShowOption {
    theme?: string,
    isShowBackground?: boolean,
}

export interface IHideOption {
    isBackgroundOnly?: boolean,
}