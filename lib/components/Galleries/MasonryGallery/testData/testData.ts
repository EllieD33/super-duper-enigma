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
    {
        imageId: 6,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/07/28/20/36/flower-8155951_960_720.jpg",
    },
    {
        imageId: 7,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/06/27/16/30/flower-8092680_960_720.jpg",
    },
    {
        imageId: 8,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/21/12/18/flower-7941814_960_720.jpg",
    },
    {
        imageId: 9,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/03/21/01/31/flower-7866187_960_720.jpg",
    },
    {
        imageId: 10,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/10/18/08/17/rose-8323259_960_720.jpg",
    },
    {
        imageId: 11,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/07/23/08/46/flower-8144644_960_720.jpg",
    },
    {
        imageId: 12,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/10/15/12/succulent-7914023_960_720.jpg",
    },
    {
        imageId: 13,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/01/09/12/49/ferns-7707348_960_720.jpg",
    },
    {
        imageId: 14,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_960_720.jpg",
    },
    {
        imageId: 15,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/03/15/18/53/magnolia-flower-8635583_960_720.jpg",
    },
    {
        imageId: 16,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/11/13/01/30/flower-8384359_960_720.jpg",
    },
    {
        imageId: 17,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/03/04/16/07/winter-8612635_960_720.jpg",
    },
    {
        imageId: 18,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/01/04/19/40/grass-7697505_960_720.jpg",
    },
    {
        imageId: 19,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/10/02/05/29/flowers-8288492_960_720.jpg",
    },
    {
        imageId: 20,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/08/31/21/52/houseleek-8225994_960_720.jpg",
    },
    {
        imageId: 21,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/02/09/15/sempervivum-7894111_960_720.jpg",
    },
    {
        imageId: 22,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_960_720.jpg",
    },
    {
        imageId: 23,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/09/14/22/16/fern-8253836_960_720.jpg",
    },
    {
        imageId: 24,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/07/23/06/57/leaf-8144517_960_720.jpg",
    },
    {
        imageId: 25,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_960_720.jpg",
    },
    {
        imageId: 26,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/05/15/07/59/flowers-8763039_960_720.jpg",
    },
    {
        imageId: 27,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/07/08/19/28/leaves-8115077_960_720.jpg",
    },
    {
        imageId: 28,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/09/22/07/02/red-8268266_960_720.jpg",
    },
    {
        imageId: 29,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/02/16/14/20/snail-8577681_960_720.jpg",
    },
    {
        imageId: 30,
        imageUrl:
            "https://cdn.pixabay.com/photo/2024/01/18/16/54/leaves-8517219_960_720.jpg",
    },
    {
        imageId: 31,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/04/27/14/27/butterfly-7954767_960_720.jpg",
    },
    {
        imageId: 32,
        imageUrl:
            "https://cdn.pixabay.com/photo/2023/11/13/00/47/cactus-8384331_960_720.jpg",
    },
];

const mockImages = imageData.map((data) => ({
    ...data,
    altText: `image${data.imageId} alt text`,
}));

export default mockImages;
