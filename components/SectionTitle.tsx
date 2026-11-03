
interface Props{
    title: string;
}

export default function SectionTitle ({title }: Props){

    return(
        <div className="flex items-center gap-4 mb-10">
            <h2 className="text-xl uppercase leading-none">
                {title}
            </h2>
        </div>
    )
}