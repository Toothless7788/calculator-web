export default function Screen({text}: {text: string}) {
    return (
        <div>
            <span className="inline-block text-slate-900 bg-lime-800 w-96 h-16 rounded-md text-right text-5xl align-bottom mt-6">{text}</span>
        </div>
    );
}