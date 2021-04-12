export default {
    id: "toolbox",
    style: "display: none",
    contents: [
        {
            kind: "CATEGORY",
            contents: [
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"html\"><statement name=\"content\"><block type=\"head\"><statement name=\"content\"><block type=\"title\"><statement name=\"content\"><block type=\"plaintext\"><field name=\"content\"></field> </block> </statement> </block> </statement><next><block type=\"body\"></block> </next> </block> </statement> </block>",
                            type: "html"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"html\"></block>",
                            type: "html"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"body\"></block>",
                            type: "body"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"body_attributes\"></block>",
                            type: "body_attributes"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"head\"></block>",
                            type: "head"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"title\"><statement name=\"content\"><block type=\"plaintext\"><field name=\"content\"></field> </block> </statement> </block>",
                            type: "title"
                        }
                    ],
                    name: "Base frame",
                    colour: "#a55b5b"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"plaintext\"><field name=\"content\"></field> </block>",
                            type: "plaintext"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"horizontalbreak\"></block>",
                            type: "horizontalbreak"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"linebreak\"></block>",
                            type: "linebreak"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"paragraph\"></block>",
                            type: "paragraph"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"headline\"><field name=\"NAME\">h1</field> </block>",
                            type: "headline"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"link\"><field name=\"NAME\">target</field> </block>",
                            type: "link"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"image\"><field name=\"IMAGE\">URL</field><field name=\"ALT\">alternative text</field> </block>",
                            type: "image"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"generictag\"><field name=\"NAME\">tag</field> </block>",
                            type: "generictag"
                        }
                    ],
                    name: "Text structure",
                    colour: "#5ba55b"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"emphasise\"></block>",
                            type: "emphasise"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"inserted\"></block>",
                            type: "inserted"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"strong\"></block>",
                            type: "strong"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"deleted\"></block>",
                            type: "deleted"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"super\"></block>",
                            type: "super"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"sub\"></block>",
                            type: "sub"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"code\"></block>",
                            type: "code"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"quote\"></block>",
                            type: "quote"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"blockquote\"></block>",
                            type: "blockquote"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"sample\"></block>",
                            type: "sample"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"keyboard\"></block>",
                            type: "keyboard"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"variable\"></block>",
                            type: "variable"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"division\"></block>",
                            type: "division"
                        }
                    ],
                    name: "Text markup",
                    colour: "#5ba55b"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"span\"><value name=\"NAME\"><block type=\"style\"></block> </value> </block>",
                            type: "span"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"style\"></block>",
                            type: "style"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"color\"><field name=\"NAME\">#ff0000</field> </block>",
                            type: "color"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"bgcolour\"><field name=\"NAME\">#ff0000</field> </block>",
                            type: "bgcolour"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"genericstyle\"><field name=\"property\">property</field><field name=\"value\">value</field> </block>",
                            type: "genericstyle"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"span\"></block>",
                            type: "span"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"division\"></block>",
                            type: "division"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"generictag\"><field name=\"NAME\">tag</field> </block>",
                            type: "generictag"
                        }
                    ],
                    name: "Style",
                    colour: "#5b6da5"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"unorderedlist\"></block>",
                            type: "unorderedlist"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"orderedlist\"></block>",
                            type: "orderedlist"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"listelement\"></block>",
                            type: "listelement"
                        }
                    ],
                    name: "Enumeration",
                    colour: "#a55ba5"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"table\"><statement name=\"content\"><block type=\"tablerow\"><statement name=\"content\"><block type=\"tablecell\"><next><block type=\"tablecell\"></block> </next> </block> </statement><next><block type=\"tablerow\"><statement name=\"content\"><block type=\"tablecell\"><next><block type=\"tablecell\"></block> </next> </block> </statement> </block> </next> </block> </statement> </block>",
                            type: "table"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"table\"></block>",
                            type: "table"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"tablerow\"></block>",
                            type: "tablerow"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"tablecell\"></block>",
                            type: "tablecell"
                        }
                    ],
                    name: "Tables",
                    colour: "#5ba5a5"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"form\"></block>",
                            type: "form"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"input_text\"><field name=\"default\"></field> </block>",
                            type: "input_text"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"button\"></block>",
                            type: "button"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"input\"><field name=\"type\">text</field><field name=\"value\"></field> </block>",
                            type: "input"
                        }
                    ],
                    name: "Forms",
                    colour: "#80a55b"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"script\"></block>",
                            type: "script"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"onclick\"></block>",
                            type: "onclick"
                        }
                    ],
                    name: "Script",
                    colour: "#a5a55b"
                }
            ],
            name: "HTML",
            "expanded": "true"
        },
        {
            kind: "SEP"
        },
        {
            kind: "CATEGORY",
            contents: [
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_if\"></block>",
                            type: "controls_if"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_compare\"><field name=\"OP\">EQ</field> </block>",
                            type: "logic_compare"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_operation\"><field name=\"OP\">AND</field> </block>",
                            type: "logic_operation"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_negate\"></block>",
                            type: "logic_negate"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_boolean\"><field name=\"BOOL\">TRUE</field> </block>",
                            type: "logic_boolean"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_null\"></block>",
                            type: "logic_null"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"logic_ternary\"></block>",
                            type: "logic_ternary"
                        }
                    ],
                    name: "Logic",
                    colour: "#5C81A6"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_repeat_ext\"><value name=\"TIMES\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "controls_repeat_ext"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field> </block>",
                            type: "controls_whileUntil"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_for\"><field name=\"VAR\" id=\")[(PctVvu3c`*IACnwmm\">i</field><value name=\"FROM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"TO\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"BY\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "controls_for"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_forEach\"><field name=\"VAR\" id=\"~a;YXk@k`X$Eb9]Z6{Me\">j</field> </block>",
                            type: "controls_forEach"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"controls_flow_statements\"><field name=\"FLOW\">BREAK</field> </block>",
                            type: "controls_flow_statements"
                        }
                    ],
                    name: "Loops",
                    colour: "#5CA65C"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_round"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_number\"><field name=\"NUM\">0</field> </block>",
                            type: "math_number"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_single\"><field name=\"OP\">ROOT</field><value name=\"NUM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_single"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_trig\"><field name=\"OP\">SIN</field><value name=\"NUM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_trig"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_constant\"><field name=\"CONSTANT\">PI</field> </block>",
                            type: "math_constant"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_number_property\"><mutation divisor_input=\"false\"></mutation><field name=\"PROPERTY\">EVEN</field><value name=\"NUMBER_TO_CHECK\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_number_property"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"B\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_arithmetic"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_on_list\"><mutation op=\"SUM\"></mutation><field name=\"OP\">SUM</field> </block>",
                            type: "math_on_list"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_modulo\"><value name=\"DIVIDEND\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"DIVISOR\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_modulo"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_constrain\"><value name=\"VALUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"LOW\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"HIGH\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_constrain"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_random_int\"><value name=\"FROM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"TO\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "math_random_int"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"math_random_float\"></block>",
                            type: "math_random_float"
                        }
                    ],
                    name: "Math",
                    colour: "#5C68A6"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"3lD0;=:EX{.QS(1_E}e_\">item</field> </block> </value> </block>",
                            type: "text_charAt"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text\"><field name=\"TEXT\"></field> </block>",
                            type: "text"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_append\"><field name=\"VAR\" id=\"3lD0;=:EX{.QS(1_E}e_\">item</field><value name=\"TEXT\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_append"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_length\"><value name=\"VALUE\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_length"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_isEmpty\"><value name=\"VALUE\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_isEmpty"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"3lD0;=:EX{.QS(1_E}e_\">item</field> </block> </value><value name=\"FIND\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_indexOf"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_join\"><mutation items=\"2\"></mutation> </block>",
                            type: "text_join"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_getSubstring\"><mutation at1=\"true\" at2=\"true\"></mutation><field name=\"WHERE1\">FROM_START</field><field name=\"WHERE2\">FROM_START</field><value name=\"STRING\"><block type=\"variables_get\"><field name=\"VAR\" id=\"3lD0;=:EX{.QS(1_E}e_\">item</field> </block> </value> </block>",
                            type: "text_getSubstring"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_changeCase\"><field name=\"CASE\">UPPERCASE</field><value name=\"TEXT\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_changeCase"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_trim\"><field name=\"MODE\">BOTH</field><value name=\"TEXT\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_trim"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_print\"><value name=\"TEXT\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_print"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"text_prompt_ext\"><mutation type=\"TEXT\"></mutation><field name=\"TYPE\">TEXT</field><value name=\"TEXT\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "text_prompt_ext"
                        }
                    ],
                    name: "Text",
                    colour: "#5CA68D"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"$nGj}F5dt?Fu8z!2-*~F\">item</field> </block> </value> </block>",
                            type: "lists_indexOf"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_create_with\"><mutation items=\"0\"></mutation> </block>",
                            type: "lists_create_with"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_repeat\"><value name=\"NUM\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "lists_repeat"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_length\"></block>",
                            type: "lists_length"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_isEmpty\"></block>",
                            type: "lists_isEmpty"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_create_with\"><mutation items=\"3\"></mutation> </block>",
                            type: "lists_create_with"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"$nGj}F5dt?Fu8z!2-*~F\">item</field> </block> </value> </block>",
                            type: "lists_getIndex"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"$nGj}F5dt?Fu8z!2-*~F\">item</field> </block> </value> </block>",
                            type: "lists_setIndex"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_getSublist\"><mutation at1=\"true\" at2=\"true\"></mutation><field name=\"WHERE1\">FROM_START</field><field name=\"WHERE2\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"$nGj}F5dt?Fu8z!2-*~F\">item</field> </block> </value> </block>",
                            type: "lists_getSublist"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_split\"><mutation mode=\"SPLIT\"></mutation><field name=\"MODE\">SPLIT</field><value name=\"DELIM\"><shadow type=\"text\"><field name=\"TEXT\"></field> </shadow> </value> </block>",
                            type: "lists_split"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"lists_sort\"><field name=\"TYPE\">NUMERIC</field><field name=\"DIRECTION\">1</field> </block>",
                            type: "lists_sort"
                        }
                    ],
                    name: "Lists",
                    colour: "#745CA6"
                },
                {
                    kind: "CATEGORY",
                    contents: [
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"colour_picker\"><field name=\"COLOUR\">#ff0000</field> </block>",
                            type: "colour_picker"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"colour_random\"></block>",
                            type: "colour_random"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"colour_rgb\"><value name=\"RED\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"GREEN\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value><value name=\"BLUE\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "colour_rgb"
                        },
                        {
                            kind: "BLOCK",
                            blockxml: "<block type=\"colour_blend\"><value name=\"COLOUR1\"><shadow type=\"colour_picker\"><field name=\"COLOUR\">#ff0000</field> </shadow> </value><value name=\"COLOUR2\"><shadow type=\"colour_picker\"><field name=\"COLOUR\">#ff0000</field> </shadow> </value><value name=\"RATIO\"><shadow type=\"math_number\"><field name=\"NUM\">0</field> </shadow> </value> </block>",
                            type: "colour_blend"
                        }
                    ],
                    name: "Colour",
                    colour: "#A6745C"
                },
                {
                    kind: "CATEGORY",
                    name: "Variables",
                    colour: "#A65C81",
                    "custom": "VARIABLE"
                },
                {
                    kind: "CATEGORY",
                    name: "Functions",
                    colour: "#9A5CA6",
                    "custom": "PROCEDURE"
                }
            ],
            name: "Scripting"
        }
    ]
}