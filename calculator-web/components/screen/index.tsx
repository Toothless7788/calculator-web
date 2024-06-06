export default function Screen({text}: {text: string}) {
    return (
        <div>
            <h1 className="text-slate-900 bg-lime-800 w-96 h-14 rounded-md text-right text-5xl">{text}</h1>
        </div>
    );
}