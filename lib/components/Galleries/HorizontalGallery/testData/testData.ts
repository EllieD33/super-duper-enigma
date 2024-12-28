const imageData = [
    {
        imageId: 1,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/08/08/15/01/flower-8177578_640.jpg",
    },
    {
        imageId: 2,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/21/11/51/flower-7941764_640.jpg",
    },
    {
        imageId: 3,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/06/04/12/00/rose-8163000_640.jpg",
    },
];

const mockImages = imageData.map((data) => ({
    ...data,
    altText: `image${data.imageId} alt text`,
}));

export default mockImages;
