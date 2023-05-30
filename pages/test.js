// <environment>
"use strict";
import { useEffect } from "react";
import {
  TextAnalysisClient,
  AzureKeyCredential,
} from "@azure/ai-text-analytics";

export default function test() {
  const documents = [
    "I am very sad",
     ];

  async function main() {
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
        deploymentName : deploymentName,
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
        console.log(`\tClassification: ${result.classifications[0].category}`);
      }
    }
  }

  useEffect(() => {
    main()
  }, []);
  return <div>test</div>;
}

// </main>
