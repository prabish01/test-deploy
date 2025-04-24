var U=function(){return U=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},U.apply(this,arguments)};function N(e,t){if(!Boolean(e))throw new Error(t)}function me(e){return typeof e=="object"&&e!==null}function ye(e,t){if(!Boolean(e))throw new Error(t??"Unexpected invariant triggered.")}var Fe=/\r\n|[\n\r]/g;function R(e,t){let r=0,n=1;for(let a of e.body.matchAll(Fe)){if(typeof a.index=="number"||ye(!1),a.index>=t)break;r=a.index+a[0].length,n+=1}return{line:n,column:t+1-r}}function re(e){return $(e.source,R(e.source,e.start))}function $(e,t){let r=e.locationOffset.column-1,n="".padStart(r)+e.body,a=t.line-1,i=e.locationOffset.line-1,o=t.line+i,y=t.line===1?r:0,d=t.column+y,c=`${e.name}:${o}:${d}
`,S=n.split(/\r\n|[\n\r]/g),g=S[a];if(g.length>120){let h=Math.floor(d/80),A=d%80,_=[];for(let I=0;I<g.length;I+=80)_.push(g.slice(I,I+80));return c+Se([[`${o} |`,_[0]],..._.slice(1,h+1).map(I=>["|",I]),["|","^".padStart(A)],["|",_[h+1]]])}return c+Se([[`${o-1} |`,S[a-1]],[`${o} |`,g],["|","^".padStart(d)],[`${o+1} |`,S[a+1]]])}function Se(e){let t=e.filter(([n,a])=>a!==void 0),r=Math.max(...t.map(([n])=>n.length));return t.map(([n,a])=>n.padStart(r)+(a?" "+a:"")).join(`
`)}function Ve(e){let t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}var v=class extends Error{constructor(t,...r){var n,a,i;let{nodes:o,source:y,positions:d,path:c,originalError:S,extensions:g}=Ve(r);super(t),this.name="GraphQLError",this.path=c??void 0,this.originalError=S??void 0,this.nodes=ge(Array.isArray(o)?o:o?[o]:void 0);let h=ge((n=this.nodes)===null||n===void 0?void 0:n.map(_=>_.loc).filter(_=>_!=null));this.source=y??(h==null||(a=h[0])===null||a===void 0?void 0:a.source),this.positions=d??h?.map(_=>_.start),this.locations=d&&y?d.map(_=>R(y,_)):h?.map(_=>R(_.source,_.start));let A=me(S?.extensions)?S?.extensions:void 0;this.extensions=(i=g??A)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),S!=null&&S.stack?Object.defineProperty(this,"stack",{value:S.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,v):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(let r of this.nodes)r.loc&&(t+=`

`+re(r.loc));else if(this.source&&this.locations)for(let r of this.locations)t+=`

`+$(this.source,r);return t}toJSON(){let t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function ge(e){return e===void 0||e.length===0?void 0:e}function b(e,t,r){return new v(`Syntax Error: ${r}`,{source:e,positions:[t]})}var B=class{constructor(t,r,n){this.start=t.start,this.end=r.end,this.startToken=t,this.endToken=r,this.source=n}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},P=class{constructor(t,r,n,a,i,o){this.kind=t,this.start=r,this.end=n,this.line=a,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}},ae={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},ke=new Set(Object.keys(ae));function ne(e){let t=e?.kind;return typeof t=="string"&&ke.has(t)}var C;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(C||(C={}));var Q;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(Q||(Q={}));var p;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(p||(p={}));function q(e){return e===9||e===32}function L(e){return e>=48&&e<=57}function he(e){return e>=97&&e<=122||e>=65&&e<=90}function ie(e){return he(e)||e===95}function be(e){return he(e)||L(e)||e===95}function fe(e){var t;let r=Number.MAX_SAFE_INTEGER,n=null,a=-1;for(let o=0;o<e.length;++o){var i;let y=e[o],d=we(y);d!==y.length&&(n=(i=n)!==null&&i!==void 0?i:o,a=o,o!==0&&d<r&&(r=d))}return e.map((o,y)=>y===0?o:o.slice(r)).slice((t=n)!==null&&t!==void 0?t:0,a+1)}function we(e){let t=0;for(;t<e.length&&q(e.charCodeAt(t));)++t;return t}function _e(e,t){let r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),a=n.length===1,i=n.length>1&&n.slice(1).every(A=>A.length===0||q(A.charCodeAt(0))),o=r.endsWith('\\"""'),y=e.endsWith('"')&&!o,d=e.endsWith("\\"),c=y||d,S=!(t!=null&&t.minimize)&&(!a||e.length>70||c||i||o),g="",h=a&&q(e.charCodeAt(0));return(S&&!h||i)&&(g+=`
`),g+=r,(S||c)&&(g+=`
`),'"""'+g+'"""'}var s;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(s||(s={}));var G=class{constructor(t){let r=new P(s.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==s.EOF)do if(t.next)t=t.next;else{let r=Ue(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===s.COMMENT);return t}};function xe(e){return e===s.BANG||e===s.DOLLAR||e===s.AMP||e===s.PAREN_L||e===s.PAREN_R||e===s.SPREAD||e===s.COLON||e===s.EQUALS||e===s.AT||e===s.BRACKET_L||e===s.BRACKET_R||e===s.BRACE_L||e===s.PIPE||e===s.BRACE_R}function F(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function J(e,t){return Ie(e.charCodeAt(t))&&Ee(e.charCodeAt(t+1))}function Ie(e){return e>=55296&&e<=56319}function Ee(e){return e>=56320&&e<=57343}function D(e,t){let r=e.source.body.codePointAt(t);if(r===void 0)return s.EOF;if(r>=32&&r<=126){let n=String.fromCodePoint(r);return n==='"'?`'"'`:`"${n}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function f(e,t,r,n,a){let i=e.line,o=1+r-e.lineStart;return new P(t,r,n,i,o,a)}function Ue(e,t){let r=e.source.body,n=r.length,a=t;for(;a<n;){let i=r.charCodeAt(a);switch(i){case 65279:case 9:case 32:case 44:++a;continue;case 10:++a,++e.line,e.lineStart=a;continue;case 13:r.charCodeAt(a+1)===10?a+=2:++a,++e.line,e.lineStart=a;continue;case 35:return Be(e,a);case 33:return f(e,s.BANG,a,a+1);case 36:return f(e,s.DOLLAR,a,a+1);case 38:return f(e,s.AMP,a,a+1);case 40:return f(e,s.PAREN_L,a,a+1);case 41:return f(e,s.PAREN_R,a,a+1);case 46:if(r.charCodeAt(a+1)===46&&r.charCodeAt(a+2)===46)return f(e,s.SPREAD,a,a+3);break;case 58:return f(e,s.COLON,a,a+1);case 61:return f(e,s.EQUALS,a,a+1);case 64:return f(e,s.AT,a,a+1);case 91:return f(e,s.BRACKET_L,a,a+1);case 93:return f(e,s.BRACKET_R,a,a+1);case 123:return f(e,s.BRACE_L,a,a+1);case 124:return f(e,s.PIPE,a,a+1);case 125:return f(e,s.BRACE_R,a,a+1);case 34:return r.charCodeAt(a+1)===34&&r.charCodeAt(a+2)===34?qe(e,a):We(e,a)}if(L(i)||i===45)return Qe(e,a,i);if(ie(i))return Je(e,a);throw b(e.source,a,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:F(i)||J(r,a)?`Unexpected character: ${D(e,a)}.`:`Invalid character: ${D(e,a)}.`)}return f(e,s.EOF,n,n)}function Be(e,t){let r=e.source.body,n=r.length,a=t+1;for(;a<n;){let i=r.charCodeAt(a);if(i===10||i===13)break;if(F(i))++a;else if(J(r,a))a+=2;else break}return f(e,s.COMMENT,t,a,r.slice(t+1,a))}function Qe(e,t,r){let n=e.source.body,a=t,i=r,o=!1;if(i===45&&(i=n.charCodeAt(++a)),i===48){if(i=n.charCodeAt(++a),L(i))throw b(e.source,a,`Invalid number, unexpected digit after 0: ${D(e,a)}.`)}else a=se(e,a,i),i=n.charCodeAt(a);if(i===46&&(o=!0,i=n.charCodeAt(++a),a=se(e,a,i),i=n.charCodeAt(a)),(i===69||i===101)&&(o=!0,i=n.charCodeAt(++a),(i===43||i===45)&&(i=n.charCodeAt(++a)),a=se(e,a,i),i=n.charCodeAt(a)),i===46||ie(i))throw b(e.source,a,`Invalid number, expected digit but got: ${D(e,a)}.`);return f(e,o?s.FLOAT:s.INT,t,a,n.slice(t,a))}function se(e,t,r){if(!L(r))throw b(e.source,t,`Invalid number, expected digit but got: ${D(e,t)}.`);let n=e.source.body,a=t+1;for(;L(n.charCodeAt(a));)++a;return a}function We(e,t){let r=e.source.body,n=r.length,a=t+1,i=a,o="";for(;a<n;){let y=r.charCodeAt(a);if(y===34)return o+=r.slice(i,a),f(e,s.STRING,t,a+1,o);if(y===92){o+=r.slice(i,a);let d=r.charCodeAt(a+1)===117?r.charCodeAt(a+2)===123?Ge(e,a):je(e,a):$e(e,a);o+=d.value,a+=d.size,i=a;continue}if(y===10||y===13)break;if(F(y))++a;else if(J(r,a))a+=2;else throw b(e.source,a,`Invalid character within String: ${D(e,a)}.`)}throw b(e.source,a,"Unterminated string.")}function Ge(e,t){let r=e.source.body,n=0,a=3;for(;a<12;){let i=r.charCodeAt(t+a++);if(i===125){if(a<5||!F(n))break;return{value:String.fromCodePoint(n),size:a}}if(n=n<<4|W(i),n<0)break}throw b(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+a)}".`)}function je(e,t){let r=e.source.body,n=Ae(r,t+2);if(F(n))return{value:String.fromCodePoint(n),size:6};if(Ie(n)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){let a=Ae(r,t+8);if(Ee(a))return{value:String.fromCodePoint(n,a),size:12}}throw b(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Ae(e,t){return W(e.charCodeAt(t))<<12|W(e.charCodeAt(t+1))<<8|W(e.charCodeAt(t+2))<<4|W(e.charCodeAt(t+3))}function W(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function $e(e,t){let r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw b(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function qe(e,t){let r=e.source.body,n=r.length,a=e.lineStart,i=t+3,o=i,y="",d=[];for(;i<n;){let c=r.charCodeAt(i);if(c===34&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34){y+=r.slice(o,i),d.push(y);let S=f(e,s.BLOCK_STRING,t,i+3,fe(d).join(`
`));return e.line+=d.length-1,e.lineStart=a,S}if(c===92&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34&&r.charCodeAt(i+3)===34){y+=r.slice(o,i),o=i+1,i+=4;continue}if(c===10||c===13){y+=r.slice(o,i),d.push(y),c===13&&r.charCodeAt(i+1)===10?i+=2:++i,y="",o=i,a=i;continue}if(F(c))++i;else if(J(r,i))i+=2;else throw b(e.source,i,`Invalid character within String: ${D(e,i)}.`)}throw b(e.source,i,"Unterminated string.")}function Je(e,t){let r=e.source.body,n=r.length,a=t+1;for(;a<n;){let i=r.charCodeAt(a);if(be(i))++a;else break}return f(e,s.NAME,t,a,r.slice(t,a))}function V(e){return K(e,[])}function K(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Ke(e,t);default:return String(e)}}function Ke(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";let r=[...t,e];if(Ye(e)){let n=e.toJSON();if(n!==e)return typeof n=="string"?n:K(n,r)}else if(Array.isArray(e))return He(e,r);return ze(e,r)}function Ye(e){return typeof e.toJSON=="function"}function ze(e,t){let r=Object.entries(e);return r.length===0?"{}":t.length>2?"["+Xe(e)+"]":"{ "+r.map(([a,i])=>a+": "+K(i,t)).join(", ")+" }"}function He(e,t){if(e.length===0)return"[]";if(t.length>2)return"[Array]";let r=Math.min(10,e.length),n=e.length-r,a=[];for(let i=0;i<r;++i)a.push(K(e[i],t));return n===1?a.push("... 1 more item"):n>1&&a.push(`... ${n} more items`),"["+a.join(", ")+"]"}function Xe(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){let r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}var Ze=globalThis.process&&!0,Oe=Ze?function(t,r){return t instanceof r}:function(t,r){if(t instanceof r)return!0;if(typeof t=="object"&&t!==null){var n;let a=r.prototype[Symbol.toStringTag],i=Symbol.toStringTag in t?t[Symbol.toStringTag]:(n=t.constructor)===null||n===void 0?void 0:n.name;if(a===i){let o=V(t);throw new Error(`Cannot use ${a} "${o}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};var k=class{constructor(t,r="GraphQL request",n={line:1,column:1}){typeof t=="string"||N(!1,`Body must be a string. Received: ${V(t)}.`),this.body=t,this.name=r,this.locationOffset=n,this.locationOffset.line>0||N(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||N(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Te(e){return Oe(e,k)}function z(e,t){let r=new oe(e,t),n=r.parseDocument();return Object.defineProperty(n,"tokenCount",{enumerable:!1,value:r.tokenCount}),n}var oe=class{constructor(t,r={}){let n=Te(t)?t:new k(t);this._lexer=new G(n),this._options=r,this._tokenCounter=0}get tokenCount(){return this._tokenCounter}parseName(){let t=this.expectToken(s.NAME);return this.node(t,{kind:p.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:p.DOCUMENT,definitions:this.many(s.SOF,this.parseDefinition,s.EOF)})}parseDefinition(){if(this.peek(s.BRACE_L))return this.parseOperationDefinition();let t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===s.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw b(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){let t=this._lexer.token;if(this.peek(s.BRACE_L))return this.node(t,{kind:p.OPERATION_DEFINITION,operation:C.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let r=this.parseOperationType(),n;return this.peek(s.NAME)&&(n=this.parseName()),this.node(t,{kind:p.OPERATION_DEFINITION,operation:r,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let t=this.expectToken(s.NAME);switch(t.value){case"query":return C.QUERY;case"mutation":return C.MUTATION;case"subscription":return C.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(s.PAREN_L,this.parseVariableDefinition,s.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:p.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(s.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(s.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let t=this._lexer.token;return this.expectToken(s.DOLLAR),this.node(t,{kind:p.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:p.SELECTION_SET,selections:this.many(s.BRACE_L,this.parseSelection,s.BRACE_R)})}parseSelection(){return this.peek(s.SPREAD)?this.parseFragment():this.parseField()}parseField(){let t=this._lexer.token,r=this.parseName(),n,a;return this.expectOptionalToken(s.COLON)?(n=r,a=this.parseName()):a=r,this.node(t,{kind:p.FIELD,alias:n,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(s.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){let r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(s.PAREN_L,r,s.PAREN_R)}parseArgument(t=!1){let r=this._lexer.token,n=this.parseName();return this.expectToken(s.COLON),this.node(r,{kind:p.ARGUMENT,name:n,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let t=this._lexer.token;this.expectToken(s.SPREAD);let r=this.expectOptionalKeyword("on");return!r&&this.peek(s.NAME)?this.node(t,{kind:p.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:p.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:p.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){let r=this._lexer.token;switch(r.kind){case s.BRACKET_L:return this.parseList(t);case s.BRACE_L:return this.parseObject(t);case s.INT:return this.advanceLexer(),this.node(r,{kind:p.INT,value:r.value});case s.FLOAT:return this.advanceLexer(),this.node(r,{kind:p.FLOAT,value:r.value});case s.STRING:case s.BLOCK_STRING:return this.parseStringLiteral();case s.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:p.BOOLEAN,value:!0});case"false":return this.node(r,{kind:p.BOOLEAN,value:!1});case"null":return this.node(r,{kind:p.NULL});default:return this.node(r,{kind:p.ENUM,value:r.value})}case s.DOLLAR:if(t)if(this.expectToken(s.DOLLAR),this._lexer.token.kind===s.NAME){let n=this._lexer.token.value;throw b(this._lexer.source,r.start,`Unexpected variable "$${n}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:p.STRING,value:t.value,block:t.kind===s.BLOCK_STRING})}parseList(t){let r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:p.LIST,values:this.any(s.BRACKET_L,r,s.BRACKET_R)})}parseObject(t){let r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:p.OBJECT,fields:this.any(s.BRACE_L,r,s.BRACE_R)})}parseObjectField(t){let r=this._lexer.token,n=this.parseName();return this.expectToken(s.COLON),this.node(r,{kind:p.OBJECT_FIELD,name:n,value:this.parseValueLiteral(t)})}parseDirectives(t){let r=[];for(;this.peek(s.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){let r=this._lexer.token;return this.expectToken(s.AT),this.node(r,{kind:p.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){let t=this._lexer.token,r;if(this.expectOptionalToken(s.BRACKET_L)){let n=this.parseTypeReference();this.expectToken(s.BRACKET_R),r=this.node(t,{kind:p.LIST_TYPE,type:n})}else r=this.parseNamedType();return this.expectOptionalToken(s.BANG)?this.node(t,{kind:p.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:p.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(s.STRING)||this.peek(s.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");let n=this.parseConstDirectives(),a=this.many(s.BRACE_L,this.parseOperationTypeDefinition,s.BRACE_R);return this.node(t,{kind:p.SCHEMA_DEFINITION,description:r,directives:n,operationTypes:a})}parseOperationTypeDefinition(){let t=this._lexer.token,r=this.parseOperationType();this.expectToken(s.COLON);let n=this.parseNamedType();return this.node(t,{kind:p.OPERATION_TYPE_DEFINITION,operation:r,type:n})}parseScalarTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");let n=this.parseName(),a=this.parseConstDirectives();return this.node(t,{kind:p.SCALAR_TYPE_DEFINITION,description:r,name:n,directives:a})}parseObjectTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");let n=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:p.OBJECT_TYPE_DEFINITION,description:r,name:n,interfaces:a,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(s.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(s.BRACE_L,this.parseFieldDefinition,s.BRACE_R)}parseFieldDefinition(){let t=this._lexer.token,r=this.parseDescription(),n=this.parseName(),a=this.parseArgumentDefs();this.expectToken(s.COLON);let i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:p.FIELD_DEFINITION,description:r,name:n,arguments:a,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(s.PAREN_L,this.parseInputValueDef,s.PAREN_R)}parseInputValueDef(){let t=this._lexer.token,r=this.parseDescription(),n=this.parseName();this.expectToken(s.COLON);let a=this.parseTypeReference(),i;this.expectOptionalToken(s.EQUALS)&&(i=this.parseConstValueLiteral());let o=this.parseConstDirectives();return this.node(t,{kind:p.INPUT_VALUE_DEFINITION,description:r,name:n,type:a,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");let n=this.parseName(),a=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:p.INTERFACE_TYPE_DEFINITION,description:r,name:n,interfaces:a,directives:i,fields:o})}parseUnionTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");let n=this.parseName(),a=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:p.UNION_TYPE_DEFINITION,description:r,name:n,directives:a,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(s.EQUALS)?this.delimitedMany(s.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");let n=this.parseName(),a=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:p.ENUM_TYPE_DEFINITION,description:r,name:n,directives:a,values:i})}parseEnumValuesDefinition(){return this.optionalMany(s.BRACE_L,this.parseEnumValueDefinition,s.BRACE_R)}parseEnumValueDefinition(){let t=this._lexer.token,r=this.parseDescription(),n=this.parseEnumValueName(),a=this.parseConstDirectives();return this.node(t,{kind:p.ENUM_VALUE_DEFINITION,description:r,name:n,directives:a})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw b(this._lexer.source,this._lexer.token.start,`${Y(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");let n=this.parseName(),a=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:p.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:n,directives:a,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(s.BRACE_L,this.parseInputValueDef,s.BRACE_R)}parseTypeSystemExtension(){let t=this._lexer.lookahead();if(t.kind===s.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let r=this.parseConstDirectives(),n=this.optionalMany(s.BRACE_L,this.parseOperationTypeDefinition,s.BRACE_R);if(r.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:p.SCHEMA_EXTENSION,directives:r,operationTypes:n})}parseScalarTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let r=this.parseName(),n=this.parseConstDirectives();if(n.length===0)throw this.unexpected();return this.node(t,{kind:p.SCALAR_TYPE_EXTENSION,name:r,directives:n})}parseObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let r=this.parseName(),n=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(n.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:p.OBJECT_TYPE_EXTENSION,name:r,interfaces:n,directives:a,fields:i})}parseInterfaceTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let r=this.parseName(),n=this.parseImplementsInterfaces(),a=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(n.length===0&&a.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:p.INTERFACE_TYPE_EXTENSION,name:r,interfaces:n,directives:a,fields:i})}parseUnionTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let r=this.parseName(),n=this.parseConstDirectives(),a=this.parseUnionMemberTypes();if(n.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:p.UNION_TYPE_EXTENSION,name:r,directives:n,types:a})}parseEnumTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let r=this.parseName(),n=this.parseConstDirectives(),a=this.parseEnumValuesDefinition();if(n.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:p.ENUM_TYPE_EXTENSION,name:r,directives:n,values:a})}parseInputObjectTypeExtension(){let t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let r=this.parseName(),n=this.parseConstDirectives(),a=this.parseInputFieldsDefinition();if(n.length===0&&a.length===0)throw this.unexpected();return this.node(t,{kind:p.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:n,fields:a})}parseDirectiveDefinition(){let t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(s.AT);let n=this.parseName(),a=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let o=this.parseDirectiveLocations();return this.node(t,{kind:p.DIRECTIVE_DEFINITION,description:r,name:n,arguments:a,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(s.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(Q,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new B(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){let r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw b(this._lexer.source,r.start,`Expected ${Me(t)}, found ${Y(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){let r=this._lexer.token;if(r.kind===s.NAME&&r.value===t)this.advanceLexer();else throw b(this._lexer.source,r.start,`Expected "${t}", found ${Y(r)}.`)}expectOptionalKeyword(t){let r=this._lexer.token;return r.kind===s.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){let r=t??this._lexer.token;return b(this._lexer.source,r.start,`Unexpected ${Y(r)}.`)}any(t,r,n){this.expectToken(t);let a=[];for(;!this.expectOptionalToken(n);)a.push(r.call(this));return a}optionalMany(t,r,n){if(this.expectOptionalToken(t)){let a=[];do a.push(r.call(this));while(!this.expectOptionalToken(n));return a}return[]}many(t,r,n){this.expectToken(t);let a=[];do a.push(r.call(this));while(!this.expectOptionalToken(n));return a}delimitedMany(t,r){this.expectOptionalToken(t);let n=[];do n.push(r.call(this));while(this.expectOptionalToken(t));return n}advanceLexer(){let{maxTokens:t}=this._options,r=this._lexer.advance();if(r.kind!==s.EOF&&(++this._tokenCounter,t!==void 0&&this._tokenCounter>t))throw b(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function Y(e){let t=e.value;return Me(e.kind)+(t!=null?` "${t}"`:"")}function Me(e){return xe(e)?`"${e}"`:e}function Ce(e){return`"${e.replace(et,tt)}"`}var et=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function tt(e){return rt[e.charCodeAt(0)]}var rt=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"];var De=Object.freeze({});function le(e,t,r=ae){let n=new Map;for(let O of Object.values(p))n.set(O,Ne(t,O));let a,i=Array.isArray(e),o=[e],y=-1,d=[],c=e,S,g,h=[],A=[];do{y++;let O=y===o.length,ue=O&&d.length!==0;if(O){if(S=A.length===0?void 0:h[h.length-1],c=g,g=A.pop(),ue)if(i){c=c.slice();let M=0;for(let[te,ce]of d){let de=te-M;ce===null?(c.splice(de,1),M++):c[de]=ce}}else{c=Object.defineProperties({},Object.getOwnPropertyDescriptors(c));for(let[M,te]of d)c[M]=te}y=a.index,o=a.keys,d=a.edits,i=a.inArray,a=a.prev}else if(g){if(S=i?y:o[y],c=g[S],c==null)continue;h.push(S)}let T;if(!Array.isArray(c)){var _,I;ne(c)||N(!1,`Invalid AST Node: ${V(c)}.`);let M=O?(_=n.get(c.kind))===null||_===void 0?void 0:_.leave:(I=n.get(c.kind))===null||I===void 0?void 0:I.enter;if(T=M?.call(t,c,S,g,h,A),T===De)break;if(T===!1){if(!O){h.pop();continue}}else if(T!==void 0&&(d.push([S,T]),!O))if(ne(T))c=T;else{h.pop();continue}}if(T===void 0&&ue&&d.push([S,c]),O)h.pop();else{var ee;a={inArray:i,index:y,keys:o,edits:d,prev:a},i=Array.isArray(c),o=i?c:(ee=r[c.kind])!==null&&ee!==void 0?ee:[],y=-1,d=[],g&&A.push(g),g=c}}while(a!==void 0);return d.length!==0?d[d.length-1][1]:e}function Ne(e,t){let r=e[t];return typeof r=="object"?r:typeof r=="function"?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function ve(e){return le(e,nt)}var at=80,nt={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>l(e.definitions,`

`)},OperationDefinition:{leave(e){let t=m("(",l(e.variableDefinitions,", "),")"),r=l([e.operation,l([e.name,t]),l(e.directives," ")]," ");return(r==="query"?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+m(" = ",r)+m(" ",l(n," "))},SelectionSet:{leave:({selections:e})=>x(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:a}){let i=m("",e,": ")+t,o=i+m("(",l(r,", "),")");return o.length>at&&(o=i+m(`(
`,H(l(r,`
`)),`
)`)),l([o,l(n," "),a]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+m(" ",l(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>l(["...",m("on ",e),l(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:a})=>`fragment ${e}${m("(",l(r,", "),")")} on ${t} ${m("",l(n," ")," ")}`+a},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?_e(e):Ce(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+l(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+l(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+m("(",l(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>m("",e,`
`)+l(["schema",l(t," "),x(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>m("",e,`
`)+l(["scalar",t,l(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:a})=>m("",e,`
`)+l(["type",t,m("implements ",l(r," & ")),l(n," "),x(a)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:a})=>m("",e,`
`)+t+(Re(r)?m(`(
`,H(l(r,`
`)),`
)`):m("(",l(r,", "),")"))+": "+n+m(" ",l(a," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:a})=>m("",e,`
`)+l([t+": "+r,m("= ",n),l(a," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:a})=>m("",e,`
`)+l(["interface",t,m("implements ",l(r," & ")),l(n," "),x(a)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>m("",e,`
`)+l(["union",t,l(r," "),m("= ",l(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>m("",e,`
`)+l(["enum",t,l(r," "),x(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>m("",e,`
`)+l([t,l(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>m("",e,`
`)+l(["input",t,l(r," "),x(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:a})=>m("",e,`
`)+"directive @"+t+(Re(r)?m(`(
`,H(l(r,`
`)),`
)`):m("(",l(r,", "),")"))+(n?" repeatable":"")+" on "+l(a," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>l(["extend schema",l(e," "),x(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>l(["extend scalar",e,l(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>l(["extend type",e,m("implements ",l(t," & ")),l(r," "),x(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>l(["extend interface",e,m("implements ",l(t," & ")),l(r," "),x(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>l(["extend union",e,l(t," "),m("= ",l(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>l(["extend enum",e,l(t," "),x(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>l(["extend input",e,l(t," "),x(r)]," ")}};function l(e,t=""){var r;return(r=e?.filter(n=>n).join(t))!==null&&r!==void 0?r:""}function x(e){return m(`{
`,H(l(e,`
`)),`
}`)}function m(e,t,r=""){return t!=null&&t!==""?e+t+r:""}function H(e){return m("  ",e.replace(/\n/g,`
  `))}function Re(e){var t;return(t=e?.some(r=>r.includes(`
`)))!==null&&t!==void 0?t:!1}var X=new Map,pe=new Map,Pe=!0,Z=!1;function Le(e){return e.replace(/[\s,]+/g," ").trim()}function lt(e){return Le(e.source.body.substring(e.start,e.end))}function pt(e){var t=new Set,r=[];return e.definitions.forEach(function(n){if(n.kind==="FragmentDefinition"){var a=n.name.value,i=lt(n.loc),o=pe.get(a);o&&!o.has(i)?Pe&&console.warn("Warning: fragment with name "+a+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||pe.set(a,o=new Set),o.add(i),t.has(i)||(t.add(i),r.push(n))}else r.push(n)}),U(U({},e),{definitions:r})}function ut(e){var t=new Set(e.definitions);t.forEach(function(n){n.loc&&delete n.loc,Object.keys(n).forEach(function(a){var i=n[a];i&&typeof i=="object"&&t.add(i)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function ct(e){var t=Le(e);if(!X.has(t)){var r=z(e,{experimentalFragmentVariables:Z,allowLegacyFragmentVariables:Z});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");X.set(t,ut(pt(r)))}return X.get(t)}function w(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var n=e[0];return t.forEach(function(a,i){a&&a.kind==="Document"?n+=a.loc.source.body:n+=a,n+=e[i+1]}),ct(n)}function dt(){X.clear(),pe.clear()}function mt(){Pe=!1}function yt(){Z=!0}function St(){Z=!1}var j={gql:w,resetCaches:dt,disableFragmentWarnings:mt,enableExperimentalFragmentVariables:yt,disableExperimentalFragmentVariables:St};(function(e){e.gql=j.gql,e.resetCaches=j.resetCaches,e.disableFragmentWarnings=j.disableFragmentWarnings,e.enableExperimentalFragmentVariables=j.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=j.disableExperimentalFragmentVariables})(w||(w={}));w.default=w;var u=w;var E=u`
    fragment OrderDetail on Order {
  __typename
  id
  code
  active
  createdAt
  state
  currencyCode
  totalQuantity
  subTotal
  subTotalWithTax
  taxSummary {
    description
    taxRate
    taxTotal
  }
  shippingWithTax
  totalWithTax
  customer {
    id
    firstName
    lastName
    emailAddress
  }
  shippingAddress {
    fullName
    streetLine1
    streetLine2
    company
    city
    province
    postalCode
    countryCode
    phoneNumber
  }
  shippingLines {
    shippingMethod {
      id
      name
    }
    priceWithTax
  }
  lines {
    id
    unitPriceWithTax
    linePriceWithTax
    quantity
    featuredAsset {
      id
      preview
    }
    productVariant {
      id
      name
      price
      product {
        id
        slug
      }
    }
  }
  payments {
    id
    state
    method
    amount
    metadata
  }
}
    `,gt=u`
    fragment DetailedProduct on Product {
  id
  name
  description
  collections {
    id
    slug
    name
    breadcrumbs {
      id
      name
      slug
    }
  }
  facetValues {
    facet {
      id
      code
      name
    }
    id
    code
    name
  }
  featuredAsset {
    id
    preview
  }
  assets {
    id
    preview
  }
  variants {
    id
    name
    priceWithTax
    currencyCode
    sku
    stockLevel
    featuredAsset {
      id
      preview
    }
  }
}
    `,ht=u`
    fragment ListedProduct on SearchResult {
  productId
  productName
  slug
  productAsset {
    id
    preview
  }
  currencyCode
  priceWithTax {
    ... on PriceRange {
      min
      max
    }
    ... on SinglePrice {
      value
    }
  }
}
    `,bt=u`
    mutation login($email: String!, $password: String!, $rememberMe: Boolean) {
  login(username: $email, password: $password, rememberMe: $rememberMe) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,ft=u`
    mutation logout {
  logout {
    success
  }
}
    `,_t=u`
    mutation registerCustomerAccount($input: RegisterCustomerInput!) {
  registerCustomerAccount(input: $input) {
    __typename
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,At=u`
    mutation verifyCustomerAccount($token: String!, $password: String) {
  verifyCustomerAccount(token: $token, password: $password) {
    __typename
    ... on CurrentUser {
      id
      identifier
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,xt=u`
    mutation updateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
    __typename
  }
}
    `,It=u`
    mutation requestUpdateCustomerEmailAddress($password: String!, $newEmailAddress: String!) {
  requestUpdateCustomerEmailAddress(
    password: $password
    newEmailAddress: $newEmailAddress
  ) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,Et=u`
    mutation updateCustomerEmailAddress($token: String!) {
  updateCustomerEmailAddress(token: $token) {
    __typename
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,Ot=u`
    mutation updateCustomerAddress($input: UpdateAddressInput!) {
  updateCustomerAddress(input: $input) {
    __typename
  }
}
    `,Tt=u`
    mutation createCustomerAddress($input: CreateAddressInput!) {
  createCustomerAddress(input: $input) {
    __typename
  }
}
    `,Mt=u`
    mutation deleteCustomerAddress($id: ID!) {
  deleteCustomerAddress(id: $id) {
    success
  }
}
    `,Ct=u`
    mutation updateCustomerPassword($currentPassword: String!, $newPassword: String!) {
  updateCustomerPassword(
    currentPassword: $currentPassword
    newPassword: $newPassword
  ) {
    __typename
    ... on Success {
      success
    }
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    `,Dt=u`
    query activeChannel {
  activeChannel {
    id
    currencyCode
  }
}
    `,Nt=u`
    query eligibleShippingMethods {
  eligibleShippingMethods {
    id
    name
    description
    metadata
    price
    priceWithTax
  }
}
    `,Rt=u`
    query eligiblePaymentMethods {
  eligiblePaymentMethods {
    id
    code
    name
    description
    eligibilityMessage
    isEligible
  }
}
    `,vt=u`
    query nextOrderStates {
  nextOrderStates
}
    `,Pt=u`
    query availableCountries {
  availableCountries {
    id
    name
    code
  }
}
    `,Lt=u`
    mutation addPaymentToOrder($input: PaymentInput!) {
  addPaymentToOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,Ft=u`
    mutation transitionOrderToState($state: String!) {
  transitionOrderToState(state: $state) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,Vt=u`
    mutation createStripePaymentIntent {
  createStripePaymentIntent
}
    `,kt=u`
    query generateBraintreeClientToken {
  generateBraintreeClientToken
}
    `,wt=u`
    query collections($options: CollectionListOptions) {
  collections(options: $options) {
    items {
      id
      name
      slug
      parent {
        name
      }
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `,Ut=u`
    query collection($slug: String, $id: ID) {
  collection(slug: $slug, id: $id) {
    id
    name
    slug
    breadcrumbs {
      id
      name
      slug
    }
    children {
      id
      name
      slug
      featuredAsset {
        id
        preview
      }
    }
  }
}
    `,Bt=u`
    query activeCustomer {
  activeCustomer {
    id
    firstName
    lastName
  }
}
    `,Qt=u`
    query activeCustomerDetails {
  activeCustomer {
    id
    title
    firstName
    lastName
    phoneNumber
    emailAddress
  }
}
    `,Wt=u`
    query activeCustomerAddresses {
  activeCustomer {
    id
    addresses {
      id
      company
      fullName
      streetLine1
      streetLine2
      city
      province
      postalCode
      country {
        id
        code
        name
      }
      phoneNumber
      defaultShippingAddress
      defaultBillingAddress
    }
  }
}
    `,Gt=u`
    query activeCustomerOrderList($orderListOptions: OrderListOptions) {
  activeCustomer {
    orders(options: $orderListOptions) {
      totalItems
      items {
        code
        state
        orderPlacedAt
        currencyCode
        subTotal
        subTotalWithTax
        total
        totalWithTax
        shippingWithTax
        shippingLines {
          priceWithTax
        }
        taxSummary {
          taxBase
          taxTotal
        }
        discounts {
          amountWithTax
        }
        fulfillments {
          trackingCode
        }
        lines {
          quantity
          discountedLinePriceWithTax
          discountedUnitPriceWithTax
          fulfillmentLines {
            quantity
            fulfillment {
              state
              updatedAt
            }
          }
          featuredAsset {
            name
            source
            preview
          }
          productVariant {
            name
            sku
            currencyCode
            priceWithTax
            product {
              slug
            }
          }
        }
      }
    }
  }
}
    `,jt=u`
    mutation setCustomerForOrder($input: CreateCustomerInput!) {
  setCustomerForOrder(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,$t=u`
    mutation setOrderShippingAddress($input: CreateAddressInput!) {
  setOrderShippingAddress(input: $input) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,qt=u`
    mutation setOrderShippingMethod($shippingMethodId: [ID!]!) {
  setOrderShippingMethod(shippingMethodId: $shippingMethodId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,Jt=u`
    mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,Kt=u`
    mutation removeOrderLine($orderLineId: ID!) {
  removeOrderLine(orderLineId: $orderLineId) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,Yt=u`
    mutation adjustOrderLine($orderLineId: ID!, $quantity: Int!) {
  adjustOrderLine(orderLineId: $orderLineId, quantity: $quantity) {
    ...OrderDetail
    ... on ErrorResult {
      errorCode
      message
    }
  }
}
    ${E}`,zt=u`
    query activeOrder {
  activeOrder {
    ...OrderDetail
  }
}
    ${E}`,Ht=u`
    query orderByCode($code: String!) {
  orderByCode(code: $code) {
    ...OrderDetail
  }
}
    ${E}`,Xt=u`
    query product($slug: String, $id: ID) {
  product(slug: $slug, id: $id) {
    ...DetailedProduct
  }
}
    ${gt}`,Zt=u`
    query search($input: SearchInput!) {
  search(input: $input) {
    totalItems
    items {
      ...ListedProduct
    }
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}
    ${ht}`,er=u`
    query searchFacetValues($input: SearchInput!) {
  search(input: $input) {
    totalItems
    facetValues {
      count
      facetValue {
        id
        name
        facet {
          id
          name
        }
      }
    }
  }
}
    `;function _a(e){return{login(t,r){return e(bt,t,r)},logout(t,r){return e(ft,t,r)},registerCustomerAccount(t,r){return e(_t,t,r)},verifyCustomerAccount(t,r){return e(At,t,r)},updateCustomer(t,r){return e(xt,t,r)},requestUpdateCustomerEmailAddress(t,r){return e(It,t,r)},updateCustomerEmailAddress(t,r){return e(Et,t,r)},updateCustomerAddress(t,r){return e(Ot,t,r)},createCustomerAddress(t,r){return e(Tt,t,r)},deleteCustomerAddress(t,r){return e(Mt,t,r)},updateCustomerPassword(t,r){return e(Ct,t,r)},activeChannel(t,r){return e(Dt,t,r)},eligibleShippingMethods(t,r){return e(Nt,t,r)},eligiblePaymentMethods(t,r){return e(Rt,t,r)},nextOrderStates(t,r){return e(vt,t,r)},availableCountries(t,r){return e(Pt,t,r)},addPaymentToOrder(t,r){return e(Lt,t,r)},transitionOrderToState(t,r){return e(Ft,t,r)},createStripePaymentIntent(t,r){return e(Vt,t,r)},generateBraintreeClientToken(t,r){return e(kt,t,r)},collections(t,r){return e(wt,t,r)},collection(t,r){return e(Ut,t,r)},activeCustomer(t,r){return e(Bt,t,r)},activeCustomerDetails(t,r){return e(Qt,t,r)},activeCustomerAddresses(t,r){return e(Wt,t,r)},activeCustomerOrderList(t,r){return e(Gt,t,r)},setCustomerForOrder(t,r){return e(jt,t,r)},setOrderShippingAddress(t,r){return e($t,t,r)},setOrderShippingMethod(t,r){return e(qt,t,r)},addItemToOrder(t,r){return e(Jt,t,r)},removeOrderLine(t,r){return e(Kt,t,r)},adjustOrderLine(t,r){return e(Yt,t,r)},activeOrder(t,r){return e(zt,t,r)},orderByCode(t,r){return e(Ht,t,r)},product(t,r){return e(Xt,t,r)},search(t,r){return e(Zt,t,r)},searchFacetValues(t,r){return e(er,t,r)}}}export{ve as a,u as b,_a as c};
