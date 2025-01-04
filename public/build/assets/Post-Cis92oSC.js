import{r as g,j as e,a as u,Y as Z,y as L}from"./app-DQ0PZuCN.js";import{A as ee,B as k,a as A,b as U,c as se,T as re,d as ae,e as le,f as ie}from"./AuthenticatedLayout-i4xwkD4-.js";import{u as R,t as M,F as ne,L as _,a as c,b as o,c as m,d,e as x,T as te,E as ce,f as oe,S as de,U as H}from"./Editor-Bcv4yp6t.js";import{z as n}from"./index-DXqQCM1T.js";import{B as i}from"./index-BbNFQDGG.js";import{C as j,a as y,b as p,c as N,d as C}from"./card-z5md7YTG.js";import{I as O}from"./input-lFzldYUU.js";import{C as he,S as w,a as S,b as F,c as P,d as f}from"./select-B1eL_T4F.js";import{c as me}from"./createLucideIcon-DWAMUaFk.js";import"./Combination-D7DhrWj8.js";import"./react-icons.esm-plFxW7SI.js";import"./index-CIJHX0sA.js";import"./index-CpfLGUjz.js";import"./dropdown-menu-C99x41kq.js";import"./index-Ca6L9FGw.js";import"./index-ByyiB7H9.js";import"./label-DnxGWVuI.js";import"./BlogEditor-1xve1qkA.js";import"./index-C9Q1HyKK.js";/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=me("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),ue=b=>b===1,De=({categories:b=[],post:a,image:Y})=>{var B;g.useState(a.content??"");const[h,E]=g.useState(!1),[I,V]=g.useState(a.subcategories||[]),[v,$]=g.useState(Y??null);g.useRef();const D=n.object({title:n.string().min(1,"Title is required").max(100,"Title must be 100 characters or less"),content:n.string().min(1,"Content is required"),description:n.string().min(1,"Description is required").max(180,"Description should be maximum 180 characters"),slug:n.string().min(1,"Slug is required"),category:n.string({required_error:"Please select a Post Category"}),status:n.string().min(1,"Status is required"),featured:n.boolean().optional(),subcategory:n.string().optional()}),l=R({mode:"onchange",resolver:M(D),defaultValues:{title:a.title??"",description:a.description??"",content:a.content??"",category:a.category.name??"",status:a.status??"draft",slug:a.slug??"draft",featured:ue(a.featured)??!1,subcategory:((B=a.subcategory)==null?void 0:B.name)??""}}),G=s=>{const r=b.find(t=>t.name===s);r.children&&r.children.length?(V(r.children),l.setValue("category",r.name)):(l.setValue("category",s),l.setValue("subcategory",""),V([]))},q=R({resolver:M(D),defaultValues:{image:a.image??null}}),z=s=>{E(!0)},T=s=>{E(!1)},J=s=>{l.setValue("content",s)};function K(s){L.patch(route("admin.posts.update",a.id),s,{onStart:z,onFinish:T,onError:r=>{X(r)}})}const Q=()=>{const s=q.getValues("image");if(!s)return;const r=new FormData;r.append("image",s),L.post(route("admin.posts.image.update",a.id),r,{onStart:z,onFinish:T,onError:t=>{t.image&&q.setError("image",{message:t.image})}})},X=s=>{Object.keys(s).forEach(r=>{l.setError(r,{message:s[r]})})};return e.jsxs(ee,{header:e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx(A,{asChild:!0,children:e.jsx(u,{href:route("admin.dashboard"),children:"Dashboard"})})}),e.jsx(U,{}),e.jsx(k,{children:e.jsx(A,{asChild:!0,children:e.jsx(u,{href:route("admin.posts"),children:"Posts"})})}),e.jsx(U,{}),e.jsx(k,{children:e.jsx(se,{children:"Add Post"})})]}),children:[e.jsxs(Z,{children:[e.jsx("title",{children:"Create Post"}),e.jsx("meta",{"head-key":"description",name:"description",content:a.description??""}),e.jsx("meta",{"head-key":"robots",name:"robots",content:"max-snippet:-1, max-video-preview:-1, max-image-preview:large"})]}),e.jsx(ne,{...l,children:e.jsx("form",{onSubmit:l.handleSubmit(K),children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4 flex-wrap md:flex-wrap lg:flex-nowrap",children:[e.jsxs(i,{variant:"outline",size:"icon",className:"h-7 w-7",children:[e.jsx(u,{href:route("admin.posts"),children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx(u,{className:"sr-only",href:route("admin.posts"),children:e.jsx("span",{children:"Back"})})]}),e.jsxs("div",{className:"hidden items-center gap-2 md:ml-auto md:flex",children:[a.status==="draft"?e.jsx(e.Fragment,{children:e.jsxs(i,{variant:"secondary",className:"space-x-1",size:"sm",children:[e.jsx(u,{href:route("posts.show",[a.subcategory?a.subcategory.name:a.category.name,a.slug]),children:"Preview"}),e.jsx(W,{size:15})]})}):e.jsx(e.Fragment,{children:e.jsxs(i,{variant:"secondary",className:"space-x-1",size:"sm",children:[e.jsx(u,{href:route("posts.show",[a.subcategory?a.subcategory.name:a.category.name,a.slug]),children:"View "}),e.jsx(W,{size:15})]})}),e.jsx(i,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(i,{size:"sm",type:"submit",children:h?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Post"})})]})]}),e.jsxs("div",{className:"grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8",children:[e.jsx("div",{className:"grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8",children:e.jsxs(j,{"x-chunk":"dashboard-07-chunk-0",children:[e.jsxs(y,{children:[e.jsx(p,{children:"Post Details"}),e.jsx(N,{children:"Enter Details related to post"})]}),e.jsx(C,{children:e.jsxs("div",{className:"grid gap-6",children:[e.jsx("div",{className:"grid gap-3",children:e.jsx(c,{control:l.control,name:"title",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Title"}),e.jsx(d,{children:e.jsx(O,{placeholder:"Title",type:"text",className:"w-full",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(c,{control:l.control,name:"slug",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Slug"}),e.jsx(d,{children:e.jsx(O,{placeholder:"Slug",type:"text",className:"w-full",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid gap-3",children:e.jsx(c,{control:l.control,name:"description",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Description"}),e.jsx(d,{children:e.jsx(te,{id:"description",placeholder:"Description",className:"min-h-32",...s})}),e.jsx(x,{})]})})}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(c,{control:l.control,name:"content",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Content"}),e.jsx(d,{children:e.jsx("div",{className:"",children:e.jsx(ce,{data:a.content,onChange:r=>J(r)})})}),e.jsx(oe,{children:"Write your post content here."}),e.jsx(x,{})]})})})]})})]})}),e.jsxs("div",{className:"grid auto-rows-max items-start gap-4 lg:gap-8",children:[e.jsxs(j,{"x-chunk":"dashboard-07-chunk-2",children:[e.jsx(y,{children:e.jsx(p,{children:"Post Category"})}),e.jsx(C,{children:e.jsx("div",{className:"grid gap-6 sm:grid-cols-3",children:e.jsxs("div",{className:"grid gap-3",children:[e.jsx(c,{control:l.control,name:"category",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Category"}),e.jsxs(w,{onValueChange:r=>{G(r)},defaultValue:s.value,children:[e.jsx(d,{children:e.jsx(S,{children:e.jsx(F,{placeholder:"Select a Post Category"})})}),e.jsx(P,{children:b.map(r=>e.jsx(f,{value:r.name,children:r.name},r.id))})]}),e.jsx(x,{})]})}),I.length?e.jsx(c,{control:l.control,name:"subcategory",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Sub Category"}),e.jsxs(w,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(d,{children:e.jsx(S,{children:e.jsx(F,{placeholder:"Select a Post Category"})})}),e.jsx(P,{children:I.map(r=>e.jsx(f,{value:r.name,children:r.name},r.id))})]}),e.jsx(x,{})]})}):null]})})})]}),e.jsxs(j,{"x-chunk":"dashboard-07-chunk-3",children:[e.jsx(y,{children:e.jsx(p,{children:"Post Status"})}),e.jsx(C,{children:e.jsx("div",{className:"grid gap-6",children:e.jsx("div",{className:"grid gap-3",children:e.jsx(c,{control:l.control,name:"status",render:({field:s})=>e.jsxs(o,{children:[e.jsx(m,{children:"Status"}),e.jsxs(w,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(d,{children:e.jsx(S,{id:"status","aria-label":"Select status",children:e.jsx(F,{placeholder:"Select status"})})}),e.jsxs(P,{children:[e.jsx(f,{value:"draft",children:"Draft"}),e.jsx(f,{value:"published",children:"Published"}),e.jsx(f,{value:"archived",children:"Archived"})]})]})]})})})})})]}),e.jsx(j,{"x-chunk":"dashboard-07-chunk-3",children:e.jsxs("div",{className:"flex p-5 justify-between items-center",children:[e.jsxs("div",{className:"flex flex-col max-w-[380px] space-y-2",children:[e.jsx(p,{children:"Featured Post"}),e.jsx(N,{children:"Marking this post as featured will reset other posts featured."})]}),e.jsx(c,{control:l.control,name:"featured",render:({field:s})=>e.jsx(o,{children:e.jsx(d,{children:e.jsx(de,{checked:s.value,onCheckedChange:s.onChange})})})})]})}),e.jsxs(j,{className:"overflow-hidden","x-chunk":"dashboard-07-chunk-4",children:[e.jsxs(y,{children:[e.jsx(p,{children:"Post Image"}),e.jsx(N,{children:"Upload featured image for this post."})]}),e.jsx(C,{children:e.jsxs("div",{className:"grid gap-2",children:[e.jsx("input",{type:"file",accept:"image/*",onChange:s=>{const r=s.target.files[0];if(r){const t=new FileReader;t.onloadend=()=>{$(t.result),q.setValue("image",s.target.files[0])},t.readAsDataURL(r)}},className:"hidden",id:"file-upload"}),v?e.jsx("img",{onClick:h?void 0:s=>document.getElementById("file-upload").click(),alt:a.title??"",className:`aspect-square w-full rounded-md object-cover ${h?"cursor-not-allowed":"cursor-pointer"}`,height:"300",src:v,width:"300"}):e.jsx("img",{alt:a.title??"",className:"aspect-square w-full rounded-md object-cover",height:"300",src:"/placeholder.svg",width:"300"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsx(re,{children:e.jsxs(ae,{children:[e.jsx(le,{asChild:!0,children:v?e.jsxs(e.Fragment,{children:[e.jsxs(i,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",onClick:s=>document.getElementById("file-upload").click(),disabled:h,children:[e.jsx(H,{className:"h-4 w-4 mr-2"}),"Change Image"]}),e.jsx(i,{className:"mt-2",type:"button",onClick:Q,disabled:h,children:h?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"mr-2 h-4 w-4 animate-spin"})," ","Saving"]}):e.jsx(e.Fragment,{children:"Save Image"})})]}):e.jsxs(i,{type:"button",variant:"outline",size:"sm",className:"w-full",htmlFor:"file-upload",disabled:h,onClick:s=>document.getElementById("file-upload").click(),children:[e.jsx(H,{className:"h-4 w-4 mr-2"}),"Upload Image"]})}),e.jsx(ie,{side:"bottom",children:v?"Click to change image":"Click to upload image"})]})})})]})})]})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 md:hidden",children:[e.jsx(i,{variant:"outline",size:"sm",children:"Discard"}),e.jsx(i,{type:"submit",size:"sm",children:"Save Post"})]})]})})}),e.jsx("style",{jsx:!0,global:!0,children:`
                .quill-shadcn .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid hsl(var(--border));
                    padding: 0.5rem;
                }

                .quill-shadcn .ql-container.ql-snow {
                    border: none;
                }

                .quill-shadcn .ql-editor {
                    min-height: 200px;
                    font-size: 1rem;
                    line-height: 1.5;
                    padding: 1rem;
                    color: hsl(var(--foreground));
                }

                .quill-shadcn .ql-editor.ql-blank::before {
                    color: hsl(var(--muted-foreground));
                    font-style: normal;
                }

                .quill-shadcn .ql-formats button {
                    height: 28px;
                    width: 28px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 4px;
                    color: hsl(var(--foreground));
                }

                .quill-shadcn .ql-formats button:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }

                .quill-shadcn .ql-formats button.ql-active {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }

                .quill-shadcn .ql-formats .ql-picker {
                    color: hsl(var(--foreground));
                }

                .quill-shadcn .ql-formats .ql-picker:hover .ql-picker-label {
                    color: hsl(var(--accent-foreground));
                }

                .quill-shadcn .ql-formats .ql-picker-options {
                    background-color: hsl(var(--background));
                    border: 1px solid hsl(var(--border));
                    border-radius: 4px;
                    padding: 0.5rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .quill-shadcn .ql-formats .ql-picker-item {
                    padding: 0.25rem 0.5rem;
                    border-radius: 4px;
                }

                .quill-shadcn .ql-formats .ql-picker-item:hover {
                    background-color: hsl(var(--accent));
                    color: hsl(var(--accent-foreground));
                }
            `})]})};export{De as default};
