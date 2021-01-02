// Tem o .d no nome, pois assim declara que ele é um arquivo global e não precimos mais importá-lo.
interface ITodo {
    _id: string,
    name: string,
    description: string,
    status: boolean,
    createdAt?: string,
    updatedAt?: string
}

interface TodoProps {
    todo: ITodo
}

type ApiDataType = {
    message: string,
    status: string,
    todos: ITodo[],
    todo?: ITodo
}