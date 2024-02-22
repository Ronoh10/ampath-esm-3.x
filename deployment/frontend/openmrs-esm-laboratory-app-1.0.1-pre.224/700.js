(globalThis.webpackChunk_openmrs_esm_laboratory_app=globalThis.webpackChunk_openmrs_esm_laboratory_app||[]).push([[700],{7484:(e,n,t)=>{"use strict";t.r(n),t.d(n,{addToWorklistDialog:()=>L,approvedComponent:()=>w,completedTileComponent:()=>j,editResultsDialog:()=>T,importTranslation:()=>f,laboratoryComponent:()=>A,laboratoryDashboardLink:()=>m,laboratoryOrderComponent:()=>h,laboratoryOrderDashboardLink:()=>g,pickLabRequestButton:()=>O,referredTestComponent:()=>D,referredTileComponent:()=>R,rejectOrderButton:()=>U,rejectOrderDialog:()=>v,resultsSummaryWorkSpace:()=>C,reviewComponent:()=>S,reviewItemDialog:()=>k,root:()=>b,sendEmailDialog:()=>_,startupApp:()=>P,testOrderedTileComponent:()=>N,worklistComponent:()=>E,worklistTileComponent:()=>B});var o=t(8704),r={laboratoryQueueConcept:{_type:o.Type.String,_default:"1836ac8a-a855-4c7e-b2ba-a290233c67b7",_description:"Concept uuid for the laboratory queue."},laboratoryLocationTag:{_type:o.Type.String,_default:"Laboratory",_description:"Location tag for laboratory locations."},laboratorySpecimenTypeConcept:{_type:o.Type.ConceptUuid,_default:"162476AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",_description:"Concept UUID for laboratory specimen types"},laboratoryEncounterTypeUuid:{_type:o.Type.String,_default:"214e27a1-606a-4b1e-a96e-d736c87069d5",_description:"Concept uuid for the laboratory tool encounter type."},laboratoryOrderTypeUuid:{_type:o.Type.String,_default:"52a447d3-a64a-11e3-9aeb-50e549534c5e",_description:"Uuid for orderType"},laboratoryReferalDestinationUuid:{_type:o.Type.String,_default:"b1f8b6c8-c255-4518-89f5-4236ab76025b",_description:"Concept uuid for laboratory referals destinations"},enableSendingLabTestsByEmail:{_type:o.Type.Boolean,_default:!1,_description:"This enables sending results to patient via email"}},a=t(7244),i=t.n(a),c=t(1724);function l(e){var n=e.dashboardLinkConfig,t=n.name,r=n.title,l=(0,c.useLocation)(),s="".concat(window.spaBase,"/home"),u=(0,a.useMemo)((function(){var e=l.pathname.split("/home"),n=e[e.length-1];return decodeURIComponent(n)}),[l.pathname]);return i().createElement(o.ConfigurableLink,{to:"".concat(s,"/").concat(t),className:"cds--side-nav__link ".concat(u.match(t)&&"active-left-nav-link")},r)}const s=function(e){return e.closeWorkspace,e.promptBeforeClosing,i().createElement(i().Fragment,null,i().createElement("span",null,"Coming Soon..."))};var u,y=t(516),d="@openmrs/esm-laboratory-app",p={featureName:"ugandaemr-laboratory",moduleName:d},f=t(6404),b=(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(552),t.e(128),t.e(800),t.e(104)]).then(t.bind(t,5104))}),p),m=(0,o.getSyncLifecycle)((u={name:"laboratory",slot:"laboratory-dashboard-slot",title:"Laboratory"},function(){return i().createElement(c.BrowserRouter,null,i().createElement(l,{dashboardLinkConfig:u}))}),p),A=(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(552),t.e(128),t.e(800)]).then(t.bind(t,3800))}),p),g=(0,o.getSyncLifecycle)((0,y.cf)({path:"laboratory-orders",title:"Investigative Results",moduleName:d}),p),h=(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(552),t.e(648),t.e(480),t.e(260)]).then(t.bind(t,9452))}),p),L=(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(648),t.e(664)]).then(t.bind(t,2664))}),p),_=(0,o.getAsyncLifecycle)((function(){return t.e(592).then(t.bind(t,4592))}),p),C=(0,o.getAsyncLifecycle)((function(){return t.e(656).then(t.bind(t,9656))}),p),T=(0,o.getAsyncLifecycle)((function(){return t.e(920).then(t.bind(t,920))}),p),k=(0,o.getAsyncLifecycle)((function(){return t.e(24).then(t.bind(t,6024))}),p),v=(0,o.getAsyncLifecycle)((function(){return t.e(160).then(t.bind(t,3160))}),p),S=(0,o.getAsyncLifecycle)((function(){return t.e(512).then(t.bind(t,8512))}),p),w=(0,o.getAsyncLifecycle)((function(){return t.e(680).then(t.bind(t,6680))}),p),D=(0,o.getAsyncLifecycle)((function(){return t.e(704).then(t.bind(t,7704))}),p),E=(0,o.getAsyncLifecycle)((function(){return Promise.all([t.e(552),t.e(256),t.e(896)]).then(t.bind(t,8896))}),p),O=(0,o.getAsyncLifecycle)((function(){return t.e(580).then(t.bind(t,5580))}),p),U=(0,o.getAsyncLifecycle)((function(){return t.e(356).then(t.bind(t,5356))}),p),B=(0,o.getAsyncLifecycle)((function(){return t.e(176).then(t.bind(t,7176))}),p),R=(0,o.getAsyncLifecycle)((function(){return t.e(492).then(t.bind(t,4492))}),p),j=(0,o.getAsyncLifecycle)((function(){return t.e(348).then(t.bind(t,7348))}),p),N=(0,o.getAsyncLifecycle)((function(){return t.e(956).then(t.bind(t,7956))}),p);function P(){(0,o.defineConfigSchema)(d,r),(0,y.op)({name:"patient-laboratory-referral-workspace",title:"Laboratory Referral Form",load:(0,o.getSyncLifecycle)(s,p)})}},6404:(e,n,t)=>{var o={"./en.json":[7452,832],"./es.json":[6504,504],"./fr.json":[9464,84]};function r(e){if(!t.o(o,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return t.e(n[1]).then((()=>t(r)))}r.keys=()=>Object.keys(o),r.id=6404,e.exports=r}}]);