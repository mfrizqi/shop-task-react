export type task = {
    id: string,
    title: string,
    checked: boolean,
    created_at: string
}

export type TaskProps = {
    task: task,
    onDelete: any,
    toggleComplete: any
}

export type Product = {
    id: string,
    image: string,
    title: string,
    price: string,
    description: string
    category: string,
    rating: object
}

export type ProductProps = {
    product: Product,
    onDetail: any
}

export type ProductDetailProps = {
    product: Product
    onDrawerClose: any
}
