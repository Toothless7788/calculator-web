
// import clsx from "clsx";

import { EventHandler, Operation } from "@/app/lib/definitions";

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     children: React.ReactNode;
// }

// export default function Button({children, className, ...rest}: ButtonProps) {
//     return (
//         <button {...rest} className={clsx("flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria0disabled:cursor-not-allowed aria-disabled:opacity-50", className)}>
//             {children}
//         </button>
//     )
// }
export default function Button({text, action}: {text: number | Operation, action: EventHandler}) {
    const click = () => {
        action(text);
    };
    
    let displayText: string;

    if(!(text in Operation)) {
        // It is a button for inputting number
        displayText = text.toString();
    } else {
        switch(text) {
            case Operation.ADD:
                displayText = "+";
                break;
            case Operation.SUBTRACT:
                displayText = "-";
                break;
            case Operation.MULTIPLY:
                displayText = "x";
                break;
            case Operation.DIVIDE:
                displayText = "/";
                break;
            case Operation.EQUAL:
                displayText = "=";
                break;
            case Operation.RESET:
                displayText = "<-";
                break;
            default:
                displayText = "N/A";
                break;
        }
    }
    return (
        // <div className="max-w-24">
            <button className="bg-slate-900 hover:bg-cyan-900 text-white font-bold py-2 px-4 rounded-full w-20 h-20 text-4xl" onClick={click}>{displayText}</button>
        // </div>
    );
}