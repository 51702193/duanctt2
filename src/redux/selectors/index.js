export const getUserOauth2 = store => store.app.user;
export const getAppError = store => store.app.error;

export const getDistrictsmainPage = store => store.mainPage.districts;
export const getProvincesmainPage = store => store.mainPage.provinces;
export const getStreetsmainPage = store => store.mainPage.streets;
export const getWardsmainPage = store => store.mainPage.wards;

export const getDistrictsPostNews = store => store.postNews.districts;
export const getProvincesPostNews = store => store.postNews.provinces;
export const getStreetsPostNews = store => store.postNews.streets;
export const getWardsPostNews = store => store.postNews.wards;