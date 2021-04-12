<script lang="ts">
    import Blockly from "blockly";
    import { onMount } from "svelte";
    import toolbox from "../helpers/toolbox";
    import HtmlGenerator from "../helpers/html_generator";
    import "../helpers/html_blocks";

    export let initialXML = "";

    let blocklyArea;
    let clientHeight;
    let sourcecode, website;
    const options: any | Blockly.BlocklyOptions = {
        toolbox: toolbox,
        collapse: true,
        maxBlocks: Infinity,
        trashcan: true,
        tooltips: true,
        css: true,
        media: "https://blockly-demo.appspot.com/static/media/",
        rtl: false,
        scrollbars: true,
        sounds: true,
        oneBasedIndex: true,
    };
    let workspace;

    onMount(async () => {
        workspace = Blockly.inject(blocklyArea, options);
        Blockly.svgResize(workspace);
        workspace.addChangeListener(myUpdateFunction);
        if (initialXML) {
            const dom = Blockly.Xml.textToDom(initialXML);
            Blockly.Xml.domToWorkspace(dom, workspace);
        }
    });

    function myUpdateFunction() {
        const code = HtmlGenerator.workspaceToCode(workspace);
        sourcecode.innerText = code;
        const encoded = encodeURIComponent(code);
        website.src = `data:text/html;charset=utf-8,${encoded}`;
    }

    function saveWorkspaceToDownload() {
        const xml = Blockly.Xml.workspaceToDom(workspace);
        const xml_text = Blockly.Xml.domToText(xml);
        const blob = new Blob([xml_text]);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${new Date().getTime()}.xml`;
        a.click();
    }

    function saveHtmlToDownload() {
        const code = HtmlGenerator.workspaceToCode(workspace);
        const blob = new Blob([code]);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${new Date().getTime()}.html`;
        a.click();
    }

    function loadWorkspaceFromUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            const xml_text = e.target.result;
            if (xml_text) {
                console.log(xml_text);
                const xml = Blockly.Xml.textToDom(xml_text.toString());
                Blockly.Xml.domToWorkspace(xml, workspace);
            }
            event.target.value = "";
        };
        reader.readAsText(file);
    }
</script>

<section>
    <div id="blocklyArea" bind:this={blocklyArea} bind:clientHeight />
    <aside style="min-height: {clientHeight}px;">
        <div id="menubar">
            <div>
                <span id="saveText">💾 Save blocks:</span>
                <input
                    type="button"
                    value="Save"
                    id="saveButton"
                    on:click={saveWorkspaceToDownload}
                />
            </div>
            <div>
                <span id="loadText">📂 Load workspace:</span>
                <input
                    type="file"
                    id="fileButton"
                    style="max-width:200px"
                    on:change={loadWorkspaceFromUpload}
                />
            </div>
            <div>
                <span id="exportText">📄 Export webpage as HTML:</span>
                <input
                    type="button"
                    value="Export"
                    id="exportButton"
                    on:click={saveHtmlToDownload}
                />
            </div>
        </div>
        <div id="preview">
            <div id="title">untitled web page</div>
            <div id="websiteFrame">
                <iframe id="website" bind:this={website} title="" />
            </div>
        </div>
        <pre id="sourcecode" bind:this={sourcecode}>sum contnent</pre>
    </aside>
</section>

<style>
    section {
        width: 100%;
        min-height: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        grid-template-rows: 100%;
        background: #f0f0f0;
    }
    #blocklyArea {
        background: orange;
    }
    aside {
        display: flex;
        flex-direction: column;
    }
    aside > #menubar {
        height: min-content;
        display: flex;
    }
    aside > #preview {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    aside #websiteFrame {
        height: 100%;
    }
    aside > #sourcecode {
        height: 100%;
    }
    #menubar {
        background: #a9d0f7;
        grid-area: menubar;
        font-family: sans-serif;
        font-size: 18px;
        padding: 5px 10px;
    }
    #title {
        grid-area: title;
        width: 100%;
        background-color: #444;
        color: white;
        text-align: center;
        font-size: 20px;
        font-family: sans-serif;
        padding-top: 5px;
    }
    #websiteFrame {
        grid-area: website;
        border: 5px solid #444;
    }
    #sourcecode {
        grid-area: code;
        border: 5px solid lightgray;
        overflow: scroll;
        margin: 0px;
    }

    #website {
        width: calc(100% - 5px);
        height: calc(100% - 5px);
    }
</style>
