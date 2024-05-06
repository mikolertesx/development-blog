import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";

const DEFAULT_INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

const EditorPage = () => {
  const ejInstance = useRef<EditorJS>();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
      },
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      data: DEFAULT_INITIAL_DATA,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
    });
  };

  useEffect(() => {
    initEditor();

    return () => {
      ejInstance.current?.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Create Post</h1>
      <p>Your post</p>
      <div id="editorjs"></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(EditorPage), {
  ssr: false,
});
