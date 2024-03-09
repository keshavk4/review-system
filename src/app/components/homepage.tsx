"use client";
import { useState } from "react";
import StarComponent from "@/app/components/star-component";
import { ThumbsUp, ThumbsDown } from "@/app/components/thumb-icons";

export default function HomePage() {
    const [thumbStatus, setThumbStatus] = useState<string>("none");
    const [selectedTraits, setSelectedTraits] = useState<number[]>([]);

    /**
     * Handles the selection of an index.
     * If the index is already selected, it will be deselected.
     * If the index is not selected, it will be added to the selected indices.
     * 
     * @param index - The index to handle.
     */
    const handleSelect = (index: number) => {
        if (selectedTraits.includes(index)) {
            setSelectedTraits(selectedTraits.filter(i => i !== index));
        } else {
            setSelectedTraits([...selectedTraits, index]);
        }
    };

    const traits: String[] = ["Adventurous", "Clean", "Good listner", "Honest", "Humorous", "Inspiring", "Kind", "Knowledgable", "Non-judgemental", "Spontaneous", "Talkative", "Thoughtful", "Trustworthy"];

    return (
        <>
            <span className="text-3xl font-bold font-serif">Leave a review</span><br /><br />
            <span className="text-xl font-bold">Safety</span><br />
            <span className="">How safe did you feel with Trausti?</span><br />
            <StarComponent />

            <br /><hr className="border-t-2 border-dashed border-gray-300" /><br />

            <span className="text-xl font-bold">Communication</span><br />
            <span className="">How easy was to communicate with Trausti?</span><br />
            <StarComponent />

            <br /><hr className="border-t-2 border-dashed border-gray-300" /><br />

            <span className="text-xl font-bold">Whould you recommend Trausti?</span><br />
            <span className="">Your opinion won&apos;t be posted publicly.</span><br />
            <div className="mt-2 flex space-x-8">
                <button className="flex space-x-2" onClick={() => { setThumbStatus(thumbStatus === "down" ? "none" : "down") }}>
                    <ThumbsDown _OnOrOff={thumbStatus === "down"} /><span>No</span>
                </button>
                <button className="flex space-x-2" onClick={() => { setThumbStatus(thumbStatus === "up" ? "none" : "up") }}>
                    <ThumbsUp _OnOrOff={thumbStatus === "up"} /><span>Yes</span>
                </button>
            </div>

            <br /><hr className="border-t-2 border-dashed border-gray-300" /><br />

            <span className="text-xl font-bold">Praise</span><br />
            <span className="">What traits best describe Trausti?</span><br /><br />
            <div id="list-container" className="flex flex-wrap">
                {
                    traits.map((trait, index) => {
                        const isSelected = selectedTraits.includes(index);
                        return (
                            <button
                                type="button"
                                key={index}
                                className={`block m-[0_0.5rem_0.5rem_0] rounded-full w-max text-black py-2 px-4 min-[1024px]:hover:bg-green-500 ${isSelected ? "bg-green-400" : "bg-gray-300"}`}
                                onClick={() => handleSelect(index)}>
                                <span key={index} >{trait}</span>
                            </button>
                        );
                    })
                }
            </div>

            <br /><hr className="border-t-2 border-dashed border-gray-300" /><br />

            <span className="text-xl font-bold">Care to share more?</span><br />
            <span className="">How was your overall experience? What&apos;s that one thing you won&apos;t forget Trausti for?</span><br />
            <textarea name="" id="" className="border-black border-2 rounded resize py-2 px-4" cols={30} rows={10} placeholder="Come on, you know the drill." />
            <br />

            <br /><hr className="border-t-2 border-dashed border-gray-300" /><br />

            <button id="post-button" className="bg-green-400 text-green-800 font-bold py-2 px-4 rounded max-[768px]:w-[100%]">PUBLISH REVIEW</button>
        </>
    );
}