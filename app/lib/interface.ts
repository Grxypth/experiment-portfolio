export default interface simpleBlogCard{
    title: string;
    smallDescription: string;
    titleImage: { asset: { url: string } };
    currentSlug: string;
}