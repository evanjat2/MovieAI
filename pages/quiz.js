import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  TextAnalysisClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";
import { useContext } from "react";
import { AppContext } from "../context/appContext";
import loadingIcon from "../public/images/loading-icon.png"

export default function quiz() {
  const router = useRouter();
  const { getGenre } = useContext(AppContext);
  const [story, setStory] = useState([]);
  const [loading, setLoading] = useState(false);
  async function CustomSingleLabelClassification(story) {
    setLoading(true);
    if (story.length == 0) {
      console.log("KOSONGG");
      return;
    }
    const documents = [story];
    const endpoint = process.env.NEXT_PUBLIC_LANGSERVENDPOINT;
    const apiKey = process.env.NEXT_PUBLIC_LANGSERVAPIKEY1;
    const deploymentName = process.env.NEXT_PUBLIC_LANGSERV_DEPLOYMENTNAME;
    const projectName = process.env.NEXT_PUBLIC_LANGSERV_PROJECTNAME;
    const client = new TextAnalysisClient(
      endpoint,
      new AzureKeyCredential(apiKey)
    );
    const actions = [
      {
        kind: "CustomSingleLabelClassification",
        deploymentName: deploymentName,
        projectName: projectName,
      },
    ];
    const poller = await client.beginAnalyzeBatch(actions, documents, "en");
    const results = await poller.pollUntilDone();

    for await (const actionResult of results) {
      if (actionResult.kind !== "CustomSingleLabelClassification") {
        throw new Error(
          `Expected a CustomSingleLabelClassification results but got: ${actionResult.kind}`
        );
      }
      if (actionResult.error) {
        const { code, message } = actionResult.error;
        throw new Error(`Unexpected error (${code}): ${message}`);
      }
      for (const result of actionResult.results) {
        console.log(`- Document ${result.id}`);
        if (result.error) {
          const { code, message } = result.error;
          throw new Error(`Unexpected error (${code}): ${message}`);
        }
        const mood = result.classifications[0].category;
        console.log(`\tClassification: ${mood}`);
        localStorage.setItem("myMood", JSON.stringify(mood));
        getGenre(mood);
      }
    }
    setLoading(false);
    router.push({
      pathname: "/result",
    });
  }

  const getEmotion = () => {
    CustomSingleLabelClassification(story);
  };

  useEffect(() => {
    console.log(loading);
    console.log(story);
  }, [loading]);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-[#1E2A5E] to-[#000000]">
        <Header />
        <div className="text-center w-screen min-h-screen content-center grid font-poppins">
          {!loading && (
            <>
              <p className="font-poppins text-2xl text-center text-white mb-8">
                Share your thoughts and feelings
              </p>
              <p className="font-poppins text-base text-center text-white mb-8">
                It helps to figure out what's going on with you right now!
              </p>
              <div className=" transition-all gap-4 grid text-left font-poppins bg-gradient-to-bl from-[#B999ED] to-[#5B9FD9] w-[55vw] min-h-[45vh] m-auto rounded-[45px] p-[22px] mb-8">
                <div className="p-3 relative mb-3" data-te-input-wrapper-init>
                  <textarea
                    onChange={(event) => setStory(event.target.value)}
                    className="py-3 textarjustify-center peer block resize-none min-h-[auto] w-full rounded-[30px] outline-none border-0 bg-white px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-grey dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-50"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    placeholder="Write your feelings here..."
                  ></textarea>
                </div>
              </div>
              <div
                onClick={() => getEmotion()}
                className="bg-white w-[55vw] bg-gradient-to-b from-[#E7E0C6] to-[#ACBCFF] m-auto rounded-[45px] p-2 font-bold cursor-pointer hover:scale-105 transition duration-500"
              >
                SUBMIT
              </div>
            </>
          )}
          {loading && (
            <Image className="animate-spin m-auto" src={loadingIcon}/>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
