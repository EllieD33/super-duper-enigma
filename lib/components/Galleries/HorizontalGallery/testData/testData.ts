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
            "https://cdn.pixabay.com/photo/2024/01/17/17/22/bee-8515123_960_720.jpg",
    },
    {
        imageId: 4,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/11/22/08/flower-7918323_960_720.jpg",
    },
    {
        imageId: 5,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/06/04/12/00/rose-8039502_960_720.jpg",
    },
];

const mockImages = imageData.map((data) => ({
    ...data,
    altText: `image${data.imageId} alt text`,
}));

export default mockImages;
