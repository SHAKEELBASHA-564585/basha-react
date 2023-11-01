export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const FETCH_MENU_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=`;

export const restaurants = [
  {
    id: 1,
    name: "varalakshmi Tiffins",
    cloudinaryImageId: "8523266de1213e8ea57e5df4eedf747e",
    cuisines: ["South Indian", "Tiffins"],
    avgRating: "4.2",
  },
  {
    id: 2,
    name: "TajMahal-Abids",
    cuisines: ["Chinese", "North Indian"],
    cloudinaryImageId: "xtxi8kws7lmnwfardw0b",
    avgRating: "4.2",
  },
  {
    id: 3,
    name: "Star Bucks Coffee",
    cuisines: ["Bevarages", "Cafe"],
    cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
    avgRating: "4.2",
  },
  {
    id: 4,
    name: "Haldiram's restaurant",
    cuisines: ["Indian", "Snacks"],
    cloudinaryImageId: "c058b951bd917bf716630dff74648a5d",
    avgRating: "4.2",
  },

  {
    id: 5,
    name: "Millet Express",
    cuisines: ["Healthy Food", "South Indian"],
    cloudinaryImageId: "f89f83a650ad14380ffa50fccd9e2ac3",
    avgRating: "4.3",
  },
];
