import { insertBefore, insertLast } from "./insert.js"

// 1. userList.js 로 갑니다
// 2. renderUserCard 함수를 만들기
// 3. 만들어진 함수 안에 createUserCard 를 던지고,
// 4. renderUserCard 함수를 사용했을 때 렌더링이 잘 될 수 있도록

const createUserCard = ({
  id = "",
  name = '',
  email = '',
  website:site = ''

} = { }) =>{

  // const {id,name,email,website} = options;

  return /* html */`
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email${id}" href="mailto:tiger@euid.dev">${email}</a>
    </div>
    <div>
      <a class="user-website" href="http://${site}" target="_blank" rel="noopener noreferer">${site}</a>
    </div>
  </div>
  <button class="delete">삭제</button>
</article>`
}


const createSpinner = (size = 100, loadingMessage = "유저 정보를 가져오는 중") =>{
  return /* html */`
  <figure class = "loadingSpinner">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width=${size} height=${size} viewBox="0 0 ${size} ${size}" preserveAspectRatio="xMidYMid">
    <defs>
      <filter id="ldio-28wq15mfgll-filter" filterUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
        <feComponentTransfer result="cutoff">
          <feFuncA type="linear" slope="10" intercept="-5"></feFuncA>
        </feComponentTransfer>
      </filter>
    </defs><g filter="url(#ldio-28wq15mfgll-filter)"><circle cx="15" cy="114.52832193126676" r="14" fill="#e15b64">
      <animate attributeName="cy" values="114.52832193126676;-0.936841854412922" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5405005097801252s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.7423039595537256;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5405005097801252s"></animate>
    </circle><circle cx="40" cy="118.78060274268591" r="7" fill="#e15b64">
      <animate attributeName="cy" values="118.78060274268591;5.67236311092519" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0225632547428773s"></animate>
      <animate attributeName="r" values="7;0;0" keyTimes="0;0.9373128365487452;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0225632547428773s"></animate>
    </circle><circle cx="43" cy="137.3977443724879" r="35" fill="#e15b64">
      <animate attributeName="cy" values="137.3977443724879;-25.632335748009353" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2796396980594829s"></animate>
      <animate attributeName="r" values="35;0;0" keyTimes="0;0.9422771658619531;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2796396980594829s"></animate>
    </circle><circle cx="45" cy="146.84841498817536" r="31" fill="#e15b64">
      <animate attributeName="cy" values="146.84841498817536;-24.41188670157826" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7780270108261813s"></animate>
      <animate attributeName="r" values="31;0;0" keyTimes="0;0.5174831001231431;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7780270108261813s"></animate>
    </circle><circle cx="56" cy="157.02715124318507" r="43" fill="#e15b64">
      <animate attributeName="cy" values="157.02715124318507;-24.930054058705526" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0561520971036737s"></animate>
      <animate attributeName="r" values="43;0;0" keyTimes="0;0.8176425673060083;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0561520971036737s"></animate>
    </circle><circle cx="75" cy="124.87602398899928" r="14" fill="#e15b64">
      <animate attributeName="cy" values="124.87602398899928;-10.430183651377543" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.22954066671533552s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.8855216735722399;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.22954066671533552s"></animate>
    </circle><circle cx="48" cy="157.59259120001047" r="46" fill="#e15b64">
      <animate attributeName="cy" values="157.59259120001047;-42.504898100753486" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5012087574458537s"></animate>
      <animate attributeName="r" values="46;0;0" keyTimes="0;0.9584706617486752;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5012087574458537s"></animate>
    </circle><circle cx="45" cy="128.665027966614" r="11" fill="#e15b64">
      <animate attributeName="cy" values="128.665027966614;2.863351906549571" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.472562773181172s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.9841844822590382;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.472562773181172s"></animate>
    </circle><circle cx="58" cy="149.76070957961764" r="39" fill="#e15b64">
      <animate attributeName="cy" values="149.76070957961764;-20.840821488135983" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.33561508704750853s"></animate>
      <animate attributeName="r" values="39;0;0" keyTimes="0;0.7626396957019047;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.33561508704750853s"></animate>
    </circle><circle cx="62" cy="137.84310629109544" r="30" fill="#e15b64">
      <animate attributeName="cy" values="137.84310629109544;-15.654554071768336" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8167875102539262s"></animate>
      <animate attributeName="r" values="30;0;0" keyTimes="0;0.640274499580317;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8167875102539262s"></animate>
    </circle><circle cx="39" cy="138.01700582923894" r="38" fill="#e15b64">
      <animate attributeName="cy" values="138.01700582923894;-20.784784237277314" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9986045570589092s"></animate>
      <animate attributeName="r" values="38;0;0" keyTimes="0;0.5696853398701969;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9986045570589092s"></animate>
    </circle><circle cx="71" cy="146.87261656179925" r="27" fill="#e15b64">
      <animate attributeName="cy" values="146.87261656179925;-12.512505269915735" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5361759980470597s"></animate>
      <animate attributeName="r" values="27;0;0" keyTimes="0;0.5007821487458249;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5361759980470597s"></animate>
    </circle><circle cx="36" cy="146.54507454281259" r="33" fill="#e15b64">
      <animate attributeName="cy" values="146.54507454281259;-23.510686022536323" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.24287438779146575s"></animate>
      <animate attributeName="r" values="33;0;0" keyTimes="0;0.7330063365760848;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.24287438779146575s"></animate>
    </circle><circle cx="28" cy="120.8283230633962" r="11" fill="#e15b64">
      <animate attributeName="cy" values="120.8283230633962;8.280766824254883" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9645685874805675s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.5745628283285434;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9645685874805675s"></animate>
    </circle><circle cx="54" cy="145.37204755362606" r="33" fill="#e15b64">
      <animate attributeName="cy" values="145.37204755362606;-25.491897076430966" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.051820764079047s"></animate>
      <animate attributeName="r" values="33;0;0" keyTimes="0;0.6603650852021762;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.051820764079047s"></animate>
    </circle><circle cx="51" cy="135.1604831238182" r="25" fill="#e15b64">
      <animate attributeName="cy" values="135.1604831238182;-9.532275754140581" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1297840596246886s"></animate>
      <animate attributeName="r" values="25;0;0" keyTimes="0;0.8277646825023144;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1297840596246886s"></animate>
    </circle><circle cx="69" cy="127.93043009283872" r="10" fill="#e15b64">
      <animate attributeName="cy" values="127.93043009283872;-9.27740975774205" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.223806064626483s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.845698616528099;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.223806064626483s"></animate>
    </circle><circle cx="35" cy="125.11513024197802" r="14" fill="#e15b64">
      <animate attributeName="cy" values="125.11513024197802;-0.6569628031504902" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46888845889095404s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.7002802048876163;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46888845889095404s"></animate>
    </circle><circle cx="53" cy="146.8340234139215" r="45" fill="#e15b64">
      <animate attributeName="cy" values="146.8340234139215;-29.189374247223007" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3023928732547045s"></animate>
      <animate attributeName="r" values="45;0;0" keyTimes="0;0.8856772837306471;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3023928732547045s"></animate>
    </circle><circle cx="31" cy="135.96269974860488" r="20" fill="#e15b64">
      <animate attributeName="cy" values="135.96269974860488;-6.485690340634882" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7002012593905304s"></animate>
      <animate attributeName="r" values="20;0;0" keyTimes="0;0.694521070270042;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7002012593905304s"></animate>
    </circle><circle cx="43" cy="135.58316512731054" r="31" fill="#e15b64">
      <animate attributeName="cy" values="135.58316512731054;-15.558938307559352" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46341146556517154s"></animate>
      <animate attributeName="r" values="31;0;0" keyTimes="0;0.5468794049372316;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46341146556517154s"></animate>
    </circle><circle cx="57" cy="115.3100609964159" r="5" fill="#e15b64">
      <animate attributeName="cy" values="115.3100609964159;12.535233356555864" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2984990179905374s"></animate>
      <animate attributeName="r" values="5;0;0" keyTimes="0;0.8555425306575859;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2984990179905374s"></animate>
    </circle><circle cx="53" cy="133.48995159852194" r="14" fill="#e15b64">
      <animate attributeName="cy" values="133.48995159852194;-8.468779052602931" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0987572113619064s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.8026542750319817;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0987572113619064s"></animate>
    </circle><circle cx="46" cy="136.6746561118392" r="30" fill="#e15b64">
      <animate attributeName="cy" values="136.6746561118392;-22.247800079434974" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2470336675944649s"></animate>
      <animate attributeName="r" values="30;0;0" keyTimes="0;0.9535196345298453;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2470336675944649s"></animate>
    </circle><circle cx="39" cy="156.28899729186156" r="39" fill="#e15b64">
      <animate attributeName="cy" values="156.28899729186156;-25.166953031936885" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6392768500149171s"></animate>
      <animate attributeName="r" values="39;0;0" keyTimes="0;0.9075576506947048;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6392768500149171s"></animate>
    </circle><circle cx="36" cy="126.62213574108556" r="11" fill="#e15b64">
      <animate attributeName="cy" values="126.62213574108556;6.968939423042709" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.1503711886802375s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.9396638723388154;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.1503711886802375s"></animate>
    </circle><circle cx="49" cy="116.4504522026149" r="14" fill="#e15b64">
      <animate attributeName="cy" values="116.4504522026149;0.4864317225056993" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2245171882626604s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.9261468341858226;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2245171882626604s"></animate>
    </circle><circle cx="59" cy="137.35925413698263" r="37" fill="#e15b64">
      <animate attributeName="cy" values="137.35925413698263;-31.81982084143177" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8886843791239044s"></animate>
      <animate attributeName="r" values="37;0;0" keyTimes="0;0.6943445292621327;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8886843791239044s"></animate>
    </circle><circle cx="57" cy="155.39323935186107" r="42" fill="#e15b64">
      <animate attributeName="cy" values="155.39323935186107;-31.235613765581782" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.23252525483562014s"></animate>
      <animate attributeName="r" values="42;0;0" keyTimes="0;0.7474521612933496;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.23252525483562014s"></animate>
    </circle><circle cx="76" cy="131.3680618762223" r="22" fill="#e15b64">
      <animate attributeName="cy" values="131.3680618762223;-14.450690540088898" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7140985476380698s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.7004207637704364;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7140985476380698s"></animate>
    </circle><circle cx="56" cy="155.48123690083992" r="42" fill="#e15b64">
      <animate attributeName="cy" values="155.48123690083992;-38.45817195218983" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3627147058797402s"></animate>
      <animate attributeName="r" values="42;0;0" keyTimes="0;0.9482823247959107;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3627147058797402s"></animate>
    </circle><circle cx="40" cy="134.54246118481316" r="22" fill="#e15b64">
      <animate attributeName="cy" values="134.54246118481316;-7.279623734398715" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9169186312131817s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.8023147299321948;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9169186312131817s"></animate>
    </circle><circle cx="62" cy="118.03326295497686" r="4" fill="#e15b64">
      <animate attributeName="cy" values="118.03326295497686;2.6883355941975475" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.046429559981064s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.9707614237519934;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.046429559981064s"></animate>
    </circle><circle cx="47" cy="133.27373351797468" r="14" fill="#e15b64">
      <animate attributeName="cy" values="133.27373351797468;-12.702279172246179" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6502595474568261s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.9280954741473827;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6502595474568261s"></animate>
    </circle><circle cx="44" cy="115.43059546957876" r="14" fill="#e15b64">
      <animate attributeName="cy" values="115.43059546957876;-0.41497173466394344" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6471094061417779s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.7330238094747006;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6471094061417779s"></animate>
    </circle><circle cx="44" cy="144.00749974801525" r="41" fill="#e15b64">
      <animate attributeName="cy" values="144.00749974801525;-33.3006071615162" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.37619867024740666s"></animate>
      <animate attributeName="r" values="41;0;0" keyTimes="0;0.8838232421316277;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.37619867024740666s"></animate>
    </circle><circle cx="71" cy="114.13226091945174" r="5" fill="#e15b64">
      <animate attributeName="cy" values="114.13226091945174;2.0845188423347993" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.17027935548022s"></animate>
      <animate attributeName="r" values="5;0;0" keyTimes="0;0.8340119433792689;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.17027935548022s"></animate>
    </circle><circle cx="69" cy="141.17255215010928" r="28" fill="#e15b64">
      <animate attributeName="cy" values="141.17255215010928;-21.347146342057723" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2479569168724268s"></animate>
      <animate attributeName="r" values="28;0;0" keyTimes="0;0.5615870287255423;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2479569168724268s"></animate>
    </circle><circle cx="58" cy="129.32270943510562" r="20" fill="#e15b64">
      <animate attributeName="cy" values="129.32270943510562;-7.238744599352817" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.966700218095812s"></animate>
      <animate attributeName="r" values="20;0;0" keyTimes="0;0.8387018724811713;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.966700218095812s"></animate>
    </circle><circle cx="50" cy="154.5356922432403" r="43" fill="#e15b64">
      <animate attributeName="cy" values="154.5356922432403;-32.017032604523564" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0001473081076133s"></animate>
      <animate attributeName="r" values="43;0;0" keyTimes="0;0.820941313037736;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0001473081076133s"></animate>
    </circle><circle cx="25" cy="136.72757414816877" r="21" fill="#e15b64">
      <animate attributeName="cy" values="136.72757414816877;-19.521071000745618" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.0754969523790209s"></animate>
      <animate attributeName="r" values="21;0;0" keyTimes="0;0.5435256245461159;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.0754969523790209s"></animate>
    </circle><circle cx="47" cy="160.36349743386234" r="41" fill="#e15b64">
      <animate attributeName="cy" values="160.36349743386234;-37.89045546896296" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7853630729603956s"></animate>
      <animate attributeName="r" values="41;0;0" keyTimes="0;0.7611707052413669;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7853630729603956s"></animate>
    </circle><circle cx="40" cy="124.67545647673599" r="12" fill="#e15b64">
      <animate attributeName="cy" values="124.67545647673599;1.118804344466577" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7324923781804024s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.642584401377055;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7324923781804024s"></animate>
    </circle><circle cx="58" cy="146.7594343754994" r="31" fill="#e15b64">
      <animate attributeName="cy" values="146.7594343754994;-30.764207664618905" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.22401548670357724s"></animate>
      <animate attributeName="r" values="31;0;0" keyTimes="0;0.5385552553941637;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.22401548670357724s"></animate>
    </circle><circle cx="40" cy="138.67252884471637" r="29" fill="#e15b64">
      <animate attributeName="cy" values="138.67252884471637;-20.833233027259237" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2633174893660921s"></animate>
      <animate attributeName="r" values="29;0;0" keyTimes="0;0.9938952884640013;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2633174893660921s"></animate>
    </circle><circle cx="38" cy="111.82557533666333" r="4" fill="#e15b64">
      <animate attributeName="cy" values="111.82557533666333;10.773980435749618" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.16226702853614106s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.563985405943996;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.16226702853614106s"></animate>
    </circle><circle cx="45" cy="150.58794290024952" r="33" fill="#e15b64">
      <animate attributeName="cy" values="150.58794290024952;-22.874541392634146" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.281704203624843s"></animate>
      <animate attributeName="r" values="33;0;0" keyTimes="0;0.8296877016471828;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.281704203624843s"></animate>
    </circle><circle cx="52" cy="162.06569741110226" r="44" fill="#e15b64">
      <animate attributeName="cy" values="162.06569741110226;-24.97277951138588" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8632698783548113s"></animate>
      <animate attributeName="r" values="44;0;0" keyTimes="0;0.973261410136344;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8632698783548113s"></animate>
    </circle><circle cx="64" cy="142.9064304324547" r="31" fill="#e15b64">
      <animate attributeName="cy" values="142.9064304324547;-15.768396568502315" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3182244177704259s"></animate>
      <animate attributeName="r" values="31;0;0" keyTimes="0;0.906356128541868;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3182244177704259s"></animate>
    </circle><circle cx="22" cy="130.87588027579804" r="22" fill="#e15b64">
      <animate attributeName="cy" values="130.87588027579804;-3.0366332227615302" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1476225037768752s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.786695126893962;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1476225037768752s"></animate>
    </circle></g><g filter="url(#ldio-28wq15mfgll-filter)"><circle cx="62" cy="133.8258268825608" r="21" fill="#f47e60">
      <animate attributeName="cy" values="133.8258268825608;-14.640603386551247" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7176513232792477s"></animate>
      <animate attributeName="r" values="21;0;0" keyTimes="0;0.5578738993317973;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7176513232792477s"></animate>
    </circle><circle cx="70" cy="132.32111996340572" r="27" fill="#f47e60">
      <animate attributeName="cy" values="132.32111996340572;-8.727332436829574" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.344318415502811s"></animate>
      <animate attributeName="r" values="27;0;0" keyTimes="0;0.9343184501935451;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.344318415502811s"></animate>
    </circle><circle cx="63" cy="113.28568018688685" r="13" fill="#f47e60">
      <animate attributeName="cy" values="113.28568018688685;0.6410093614261072" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.237815892727701s"></animate>
      <animate attributeName="r" values="13;0;0" keyTimes="0;0.8042358884034442;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.237815892727701s"></animate>
    </circle><circle cx="79" cy="124.72290901560851" r="14" fill="#f47e60">
      <animate attributeName="cy" values="124.72290901560851;-8.191793989675144" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6317400371986345s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.6922739523955475;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6317400371986345s"></animate>
    </circle><circle cx="45" cy="136.48293615635953" r="29" fill="#f47e60">
      <animate attributeName="cy" values="136.48293615635953;-13.90083514385249" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9238742748448832s"></animate>
      <animate attributeName="r" values="29;0;0" keyTimes="0;0.6748614178611827;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9238742748448832s"></animate>
    </circle><circle cx="79" cy="118.9660196497655" r="9" fill="#f47e60">
      <animate attributeName="cy" values="118.9660196497655;4.7905814275889895" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0397899409432279s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.8771469029719463;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0397899409432279s"></animate>
    </circle><circle cx="59" cy="131.2347651225223" r="12" fill="#f47e60">
      <animate attributeName="cy" values="131.2347651225223;3.4186026383705723" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9813983183508554s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.5832967818225206;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9813983183508554s"></animate>
    </circle><circle cx="34" cy="142.1783255350918" r="29" fill="#f47e60">
      <animate attributeName="cy" values="142.1783255350918;-16.22165092236484" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4015833800526005s"></animate>
      <animate attributeName="r" values="29;0;0" keyTimes="0;0.988566812385943;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4015833800526005s"></animate>
    </circle><circle cx="66" cy="121.6800753534213" r="6" fill="#f47e60">
      <animate attributeName="cy" values="121.6800753534213;-2.8772500690260996" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7453338672451144s"></animate>
      <animate attributeName="r" values="6;0;0" keyTimes="0;0.8903369998069477;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7453338672451144s"></animate>
    </circle><circle cx="85" cy="126.5417420629413" r="10" fill="#f47e60">
      <animate attributeName="cy" values="126.5417420629413;4.32307611839207" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5131115944365382s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.5554806870731186;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5131115944365382s"></animate>
    </circle><circle cx="43" cy="114.31882849482368" r="12" fill="#f47e60">
      <animate attributeName="cy" values="114.31882849482368;-4.001092163186358" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.13374126073686657s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.7941440300407488;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.13374126073686657s"></animate>
    </circle><circle cx="27" cy="126.31388313921079" r="19" fill="#f47e60">
      <animate attributeName="cy" values="126.31388313921079;-4.065527526329117" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.378651948351714s"></animate>
      <animate attributeName="r" values="19;0;0" keyTimes="0;0.9802137071760804;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.378651948351714s"></animate>
    </circle><circle cx="68" cy="118.60327386717634" r="9" fill="#f47e60">
      <animate attributeName="cy" values="118.60327386717634;-0.1658103405566589" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0247377440736989s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.7336017779066335;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0247377440736989s"></animate>
    </circle><circle cx="46" cy="122.46047584658837" r="7" fill="#f47e60">
      <animate attributeName="cy" values="122.46047584658837;6.49397445262888" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2452076714957825s"></animate>
      <animate attributeName="r" values="7;0;0" keyTimes="0;0.6665836712560843;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2452076714957825s"></animate>
    </circle><circle cx="21" cy="112.43033659834016" r="7" fill="#f47e60">
      <animate attributeName="cy" values="112.43033659834016;3.4045889869478856" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3061913948856033s"></animate>
      <animate attributeName="r" values="7;0;0" keyTimes="0;0.9430053910456144;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3061913948856033s"></animate>
    </circle><circle cx="42" cy="131.43212543303918" r="28" fill="#f47e60">
      <animate attributeName="cy" values="131.43212543303918;-21.727778891213127" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6923564077540604s"></animate>
      <animate attributeName="r" values="28;0;0" keyTimes="0;0.5773447370731489;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6923564077540604s"></animate>
    </circle><circle cx="46" cy="132.93443895249936" r="15" fill="#f47e60">
      <animate attributeName="cy" values="132.93443895249936;-0.4644294167042098" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3389677565295992s"></animate>
      <animate attributeName="r" values="15;0;0" keyTimes="0;0.8979153382188987;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3389677565295992s"></animate>
    </circle><circle cx="70" cy="126.93636089697686" r="21" fill="#f47e60">
      <animate attributeName="cy" values="126.93636089697686;-15.384928092367076" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5626295575919589s"></animate>
      <animate attributeName="r" values="21;0;0" keyTimes="0;0.5423323477726231;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.5626295575919589s"></animate>
    </circle><circle cx="30" cy="128.45080861508694" r="23" fill="#f47e60">
      <animate attributeName="cy" values="128.45080861508694;-13.613877498336315" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.53404141693872s"></animate>
      <animate attributeName="r" values="23;0;0" keyTimes="0;0.9450859348317691;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.53404141693872s"></animate>
    </circle><circle cx="52" cy="125.61140188637083" r="8" fill="#f47e60">
      <animate attributeName="cy" values="125.61140188637083;7.353867123700354" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3289387347409938s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.549999608762936;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3289387347409938s"></animate>
    </circle><circle cx="40" cy="105.06284637546621" r="3" fill="#f47e60">
      <animate attributeName="cy" values="105.06284637546621;16.31688912882087" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.33494309846336784s"></animate>
      <animate attributeName="r" values="3;0;0" keyTimes="0;0.8783624872147053;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.33494309846336784s"></animate>
    </circle><circle cx="30" cy="128.1369223026353" r="22" fill="#f47e60">
      <animate attributeName="cy" values="128.1369223026353;-11.779281821427812" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4767991470263138s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.6340557655756642;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4767991470263138s"></animate>
    </circle><circle cx="33" cy="137.72443809796664" r="22" fill="#f47e60">
      <animate attributeName="cy" values="137.72443809796664;-15.93266983659486" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.29199933785987403s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.8568099854193953;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.29199933785987403s"></animate>
    </circle><circle cx="76" cy="132.06139818378824" r="18" fill="#f47e60">
      <animate attributeName="cy" values="132.06139818378824;-12.209797086148548" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2359330790038463s"></animate>
      <animate attributeName="r" values="18;0;0" keyTimes="0;0.5349855963221752;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2359330790038463s"></animate>
    </circle><circle cx="53" cy="148.56989409727473" r="29" fill="#f47e60">
      <animate attributeName="cy" values="148.56989409727473;-24.879341663515266" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0888571603955002s"></animate>
      <animate attributeName="r" values="29;0;0" keyTimes="0;0.9760105753011766;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0888571603955002s"></animate>
    </circle><circle cx="74" cy="121.70399679783401" r="2" fill="#f47e60">
      <animate attributeName="cy" values="121.70399679783401;11.415064590497327" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.034136264716581585s"></animate>
      <animate attributeName="r" values="2;0;0" keyTimes="0;0.8446059767015279;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.034136264716581585s"></animate>
    </circle><circle cx="75" cy="134.73387666860944" r="22" fill="#f47e60">
      <animate attributeName="cy" values="134.73387666860944;-3.4966589513144797" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2320025774171706s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.8459839222605592;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2320025774171706s"></animate>
    </circle><circle cx="30" cy="123.43394679301979" r="10" fill="#f47e60">
      <animate attributeName="cy" values="123.43394679301979;3.792861362581146" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2750320703195763s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.8154816466839457;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2750320703195763s"></animate>
    </circle><circle cx="65" cy="125.18272565485384" r="18" fill="#f47e60">
      <animate attributeName="cy" values="125.18272565485384;0.432697722344038" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4487652557043695s"></animate>
      <animate attributeName="r" values="18;0;0" keyTimes="0;0.6661386427152767;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4487652557043695s"></animate>
    </circle><circle cx="75" cy="111.14292767987504" r="10" fill="#f47e60">
      <animate attributeName="cy" values="111.14292767987504;0.12410014645369927" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7784738670553545s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.6815566913603405;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7784738670553545s"></animate>
    </circle><circle cx="82" cy="121.65993950804396" r="5" fill="#f47e60">
      <animate attributeName="cy" values="121.65993950804396;6.762343888043759" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.14028222866824186s"></animate>
      <animate attributeName="r" values="5;0;0" keyTimes="0;0.6269564634874416;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.14028222866824186s"></animate>
    </circle><circle cx="51" cy="127.25225867356967" r="26" fill="#f47e60">
      <animate attributeName="cy" values="127.25225867356967;-13.62279264239892" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.586724525930553s"></animate>
      <animate attributeName="r" values="26;0;0" keyTimes="0;0.6029482918958164;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.586724525930553s"></animate>
    </circle><circle cx="60" cy="134.4818364788421" r="26" fill="#f47e60">
      <animate attributeName="cy" values="134.4818364788421;-25.805729761058654" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4873519367812292s"></animate>
      <animate attributeName="r" values="26;0;0" keyTimes="0;0.9738303191152576;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4873519367812292s"></animate>
    </circle><circle cx="40" cy="119.04282412244571" r="10" fill="#f47e60">
      <animate attributeName="cy" values="119.04282412244571;8.599865407787615" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3166485658984385s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.7499916484422559;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3166485658984385s"></animate>
    </circle><circle cx="67" cy="119.32230475370942" r="16" fill="#f47e60">
      <animate attributeName="cy" values="119.32230475370942;1.8894187328775942" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1808528755692802s"></animate>
      <animate attributeName="r" values="16;0;0" keyTimes="0;0.5651840528345317;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1808528755692802s"></animate>
    </circle><circle cx="22" cy="104.47676617486393" r="4" fill="#f47e60">
      <animate attributeName="cy" values="104.47676617486393;6.361065150810296" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.04448493272719637s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.7439406510392798;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.04448493272719637s"></animate>
    </circle><circle cx="55" cy="145.9793532767231" r="27" fill="#f47e60">
      <animate attributeName="cy" values="145.9793532767231;-13.90337709763956" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.450231121415636s"></animate>
      <animate attributeName="r" values="27;0;0" keyTimes="0;0.7935002304230205;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.450231121415636s"></animate>
    </circle><circle cx="74" cy="129.7885275276227" r="20" fill="#f47e60">
      <animate attributeName="cy" values="129.7885275276227;-4.121383840825414" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.11012447140236774s"></animate>
      <animate attributeName="r" values="20;0;0" keyTimes="0;0.7754126329589106;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.11012447140236774s"></animate>
    </circle><circle cx="50" cy="124.19429918177897" r="22" fill="#f47e60">
      <animate attributeName="cy" values="124.19429918177897;-12.606984836208607" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.445858367274968s"></animate>
      <animate attributeName="r" values="22;0;0" keyTimes="0;0.5266402609547337;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.445858367274968s"></animate>
    </circle><circle cx="77" cy="133.2503005054342" r="18" fill="#f47e60">
      <animate attributeName="cy" values="133.2503005054342;-17.941801589389176" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7983815997279851s"></animate>
      <animate attributeName="r" values="18;0;0" keyTimes="0;0.9871680277619128;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7983815997279851s"></animate>
    </circle><circle cx="12" cy="107.67015965206132" r="5" fill="#f47e60">
      <animate attributeName="cy" values="107.67015965206132;3.184595999628396" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.28642253629894504s"></animate>
      <animate attributeName="r" values="5;0;0" keyTimes="0;0.5892851593309322;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.28642253629894504s"></animate>
    </circle><circle cx="69" cy="135.36185180130104" r="25" fill="#f47e60">
      <animate attributeName="cy" values="135.36185180130104;-5.909074370062925" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9702541211375473s"></animate>
      <animate attributeName="r" values="25;0;0" keyTimes="0;0.6204002679675706;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9702541211375473s"></animate>
    </circle><circle cx="64" cy="133.12471777676714" r="29" fill="#f47e60">
      <animate attributeName="cy" values="133.12471777676714;-25.64466431321746" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.12026713291167232s"></animate>
      <animate attributeName="r" values="29;0;0" keyTimes="0;0.8637987162173877;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.12026713291167232s"></animate>
    </circle><circle cx="71" cy="111.2792969976355" r="8" fill="#f47e60">
      <animate attributeName="cy" values="111.2792969976355;-4.840506180599979" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9299157797739392s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.9592260668498055;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9299157797739392s"></animate>
    </circle><circle cx="45" cy="137.38908065250197" r="24" fill="#f47e60">
      <animate attributeName="cy" values="137.38908065250197;-23.886537052905897" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.773657858417959s"></animate>
      <animate attributeName="r" values="24;0;0" keyTimes="0;0.8078999053029963;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.773657858417959s"></animate>
    </circle><circle cx="54" cy="131.8257565896339" r="31" fill="#f47e60">
      <animate attributeName="cy" values="131.8257565896339;-26.403071233848035" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46588086134821954s"></animate>
      <animate attributeName="r" values="31;0;0" keyTimes="0;0.7988746560303105;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46588086134821954s"></animate>
    </circle><circle cx="40" cy="114.39698863145638" r="9" fill="#f47e60">
      <animate attributeName="cy" values="114.39698863145638;8.702614728950383" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6676585385657463s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.8496318507255524;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6676585385657463s"></animate>
    </circle><circle cx="47" cy="124.94771659307557" r="13" fill="#f47e60">
      <animate attributeName="cy" values="124.94771659307557;-6.910351679998776" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2924069871914106s"></animate>
      <animate attributeName="r" values="13;0;0" keyTimes="0;0.8214628960799151;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.2924069871914106s"></animate>
    </circle><circle cx="54" cy="125.22957665062316" r="21" fill="#f47e60">
      <animate attributeName="cy" values="125.22957665062316;-18.089408624816688" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.14927605565995s"></animate>
      <animate attributeName="r" values="21;0;0" keyTimes="0;0.5157635275829424;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.14927605565995s"></animate>
    </circle><circle cx="44" cy="136.42433613564384" r="30" fill="#f47e60">
      <animate attributeName="cy" values="136.42433613564384;-20.67478066799195" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7530327879398924s"></animate>
      <animate attributeName="r" values="30;0;0" keyTimes="0;0.9459153259541376;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7530327879398924s"></animate>
    </circle></g><g filter="url(#ldio-28wq15mfgll-filter)"><circle cx="15" cy="118.13002625116849" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="118.13002625116849;3.6584604537908625" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4177478313359465s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.8238760394015988;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.4177478313359465s"></animate>
    </circle><circle cx="51" cy="124.8648606395733" r="14" fill="#f8b26a">
      <animate attributeName="cy" values="124.8648606395733;-8.22793566668794" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5575383798662794s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.5114998684904954;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5575383798662794s"></animate>
    </circle><circle cx="12" cy="114.20882662801954" r="9" fill="#f8b26a">
      <animate attributeName="cy" values="114.20882662801954;-5.731151522401859" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0417110254536044s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.9618017987908448;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0417110254536044s"></animate>
    </circle><circle cx="27" cy="120.83084413324421" r="16" fill="#f8b26a">
      <animate attributeName="cy" values="120.83084413324421;-11.809523739948963" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8934958808098917s"></animate>
      <animate attributeName="r" values="16;0;0" keyTimes="0;0.6099847667437921;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8934958808098917s"></animate>
    </circle><circle cx="71" cy="111.04382784823885" r="6" fill="#f8b26a">
      <animate attributeName="cy" values="111.04382784823885;3.5637357695196012" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9672831257169275s"></animate>
      <animate attributeName="r" values="6;0;0" keyTimes="0;0.8755996810900046;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9672831257169275s"></animate>
    </circle><circle cx="65" cy="116.00080323012016" r="3" fill="#f8b26a">
      <animate attributeName="cy" values="116.00080323012016;6.238871260821266" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.15545198278410638s"></animate>
      <animate attributeName="r" values="3;0;0" keyTimes="0;0.670308561786562;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.15545198278410638s"></animate>
    </circle><circle cx="11" cy="110.70300478652635" r="3" fill="#f8b26a">
      <animate attributeName="cy" values="110.70300478652635;15.55509662301209" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8467565207727994s"></animate>
      <animate attributeName="r" values="3;0;0" keyTimes="0;0.6168907109542842;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8467565207727994s"></animate>
    </circle><circle cx="32" cy="114.2856671287681" r="9" fill="#f8b26a">
      <animate attributeName="cy" values="114.2856671287681;1.23822195164977" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.14713398726221025s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.7525330339348494;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.14713398726221025s"></animate>
    </circle><circle cx="67" cy="123.15587269771731" r="7" fill="#f8b26a">
      <animate attributeName="cy" values="123.15587269771731;6.565589946497072" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5779447388486518s"></animate>
      <animate attributeName="r" values="7;0;0" keyTimes="0;0.9490725115218107;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.5779447388486518s"></animate>
    </circle><circle cx="75" cy="121.61729142329864" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="121.61729142329864;0.37337390535570947" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2632831771747636s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.8668288992794698;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2632831771747636s"></animate>
    </circle><circle cx="57" cy="126.83420606416959" r="8" fill="#f8b26a">
      <animate attributeName="cy" values="126.83420606416959;3.1966846890681992" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4378984353163715s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.8418052683732654;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4378984353163715s"></animate>
    </circle><circle cx="63" cy="129.92746877032104" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="129.92746877032104;4.4954662692240355" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.24403060464219s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.7907729523596169;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.24403060464219s"></animate>
    </circle><circle cx="31" cy="121.39661249597694" r="8" fill="#f8b26a">
      <animate attributeName="cy" values="121.39661249597694;11.778046784890808" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7333049567501333s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.6975937009498034;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7333049567501333s"></animate>
    </circle><circle cx="56" cy="114.90615344909271" r="12" fill="#f8b26a">
      <animate attributeName="cy" values="114.90615344909271;6.531976602199826" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46587436448393627s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.6038322442167798;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46587436448393627s"></animate>
    </circle><circle cx="68" cy="115.92655543191323" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="115.92655543191323;-4.781774534237021" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8165366490792252s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.7462767992541967;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8165366490792252s"></animate>
    </circle><circle cx="82" cy="118.45248040770824" r="15" fill="#f8b26a">
      <animate attributeName="cy" values="118.45248040770824;0.7962800790285929" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0832654021238608s"></animate>
      <animate attributeName="r" values="15;0;0" keyTimes="0;0.7815264142446932;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0832654021238608s"></animate>
    </circle><circle cx="29" cy="118.88757421240818" r="5" fill="#f8b26a">
      <animate attributeName="cy" values="118.88757421240818;2.0528094346439074" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0079366899917912s"></animate>
      <animate attributeName="r" values="5;0;0" keyTimes="0;0.972661262731624;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0079366899917912s"></animate>
    </circle><circle cx="52" cy="129.1151165961231" r="10" fill="#f8b26a">
      <animate attributeName="cy" values="129.1151165961231;8.246253956920576" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9387597660480357s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.6317175846354844;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9387597660480357s"></animate>
    </circle><circle cx="54" cy="133.37354339344338" r="15" fill="#f8b26a">
      <animate attributeName="cy" values="133.37354339344338;4.4666516974215185" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7584887750915269s"></animate>
      <animate attributeName="r" values="15;0;0" keyTimes="0;0.7328896758257589;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.7584887750915269s"></animate>
    </circle><circle cx="18" cy="118.45069018786602" r="6" fill="#f8b26a">
      <animate attributeName="cy" values="118.45069018786602;7.902602318524885" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.29956366546514424s"></animate>
      <animate attributeName="r" values="6;0;0" keyTimes="0;0.733803889044183;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.29956366546514424s"></animate>
    </circle><circle cx="45" cy="131.29418475836246" r="13" fill="#f8b26a">
      <animate attributeName="cy" values="131.29418475836246;-9.292758772061049" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9560896224110845s"></animate>
      <animate attributeName="r" values="13;0;0" keyTimes="0;0.8823208228918046;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9560896224110845s"></animate>
    </circle><circle cx="30" cy="106.38669274171816" r="4" fill="#f8b26a">
      <animate attributeName="cy" values="106.38669274171816;2.7716169471050547" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.1721253426499795s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.8582547901428548;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.1721253426499795s"></animate>
    </circle><circle cx="86" cy="112.23390558577633" r="8" fill="#f8b26a">
      <animate attributeName="cy" values="112.23390558577633;1.2449705067770935" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.683224859802598s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.6941109381212994;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.683224859802598s"></animate>
    </circle><circle cx="59" cy="124.87875386201156" r="10" fill="#f8b26a">
      <animate attributeName="cy" values="124.87875386201156;7.054760383324389" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.36565670990606575s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.9411890222364133;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.36565670990606575s"></animate>
    </circle><circle cx="74" cy="109.87993461253852" r="8" fill="#f8b26a">
      <animate attributeName="cy" values="109.87993461253852;-3.3681590038263804" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4887467999428392s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.8296701637037815;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4887467999428392s"></animate>
    </circle><circle cx="77" cy="110.6823738182941" r="10" fill="#f8b26a">
      <animate attributeName="cy" values="110.6823738182941;3.0967628564401917" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3190592999611078s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.6959315415715976;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.3190592999611078s"></animate>
    </circle><circle cx="29" cy="121.04085784286394" r="9" fill="#f8b26a">
      <animate attributeName="cy" values="121.04085784286394;-4.931602560816032" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1280785677086902s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.5526824418823781;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1280785677086902s"></animate>
    </circle><circle cx="63" cy="135.77337533186363" r="16" fill="#f8b26a">
      <animate attributeName="cy" values="135.77337533186363;-10.306716676717892" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8950361609422433s"></animate>
      <animate attributeName="r" values="16;0;0" keyTimes="0;0.6896855134623724;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8950361609422433s"></animate>
    </circle><circle cx="21" cy="103.33400234373384" r="2" fill="#f8b26a">
      <animate attributeName="cy" values="103.33400234373384;3.5491218399490094" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46343788188262075s"></animate>
      <animate attributeName="r" values="2;0;0" keyTimes="0;0.6243276842177083;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.46343788188262075s"></animate>
    </circle><circle cx="79" cy="116.6135512418995" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="116.6135512418995;7.4620176702331165" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3533705442477286s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.9442101886724983;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3533705442477286s"></animate>
    </circle><circle cx="53" cy="112.97131303770273" r="8" fill="#f8b26a">
      <animate attributeName="cy" values="112.97131303770273;7.210615347399594" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.783639424253472s"></animate>
      <animate attributeName="r" values="8;0;0" keyTimes="0;0.5388314088214095;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.783639424253472s"></animate>
    </circle><circle cx="63" cy="134.2855575444999" r="16" fill="#f8b26a">
      <animate attributeName="cy" values="134.2855575444999;-4.879750263452252" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6519150845554285s"></animate>
      <animate attributeName="r" values="16;0;0" keyTimes="0;0.8114946684908079;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.6519150845554285s"></animate>
    </circle><circle cx="53" cy="129.6009429638866" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="129.6009429638866;2.2498331365101194" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.127650562722661s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.8448348024399496;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.127650562722661s"></animate>
    </circle><circle cx="85" cy="120.18061875786427" r="10" fill="#f8b26a">
      <animate attributeName="cy" values="120.18061875786427;-2.878522486050019" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.099230866500927s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.7312267234185736;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.099230866500927s"></animate>
    </circle><circle cx="67" cy="124.69411264996343" r="12" fill="#f8b26a">
      <animate attributeName="cy" values="124.69411264996343;-5.467675957519734" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9688877930799853s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.6404586858218564;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9688877930799853s"></animate>
    </circle><circle cx="54" cy="114.93178095273447" r="12" fill="#f8b26a">
      <animate attributeName="cy" values="114.93178095273447;3.6751665583308117" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8124206962461904s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.9193840761684343;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8124206962461904s"></animate>
    </circle><circle cx="32" cy="135.47410859779174" r="16" fill="#f8b26a">
      <animate attributeName="cy" values="135.47410859779174;-12.659057295794097" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3478735293424966s"></animate>
      <animate attributeName="r" values="16;0;0" keyTimes="0;0.9503649596745666;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3478735293424966s"></animate>
    </circle><circle cx="18" cy="118.41374859785411" r="10" fill="#f8b26a">
      <animate attributeName="cy" values="118.41374859785411;-1.2988493077648187" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.520086012717698s"></animate>
      <animate attributeName="r" values="10;0;0" keyTimes="0;0.5298371938216264;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.520086012717698s"></animate>
    </circle><circle cx="74" cy="113.33869022781617" r="9" fill="#f8b26a">
      <animate attributeName="cy" values="113.33869022781617;1.633791575385123" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8472115753605826s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.625829935067784;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.8472115753605826s"></animate>
    </circle><circle cx="86" cy="127.91876071930321" r="9" fill="#f8b26a">
      <animate attributeName="cy" values="127.91876071930321;-4.361592409899689" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0990542248933566s"></animate>
      <animate attributeName="r" values="9;0;0" keyTimes="0;0.8068487840764098;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0990542248933566s"></animate>
    </circle><circle cx="90" cy="113.80435404742366" r="7" fill="#f8b26a">
      <animate attributeName="cy" values="113.80435404742366;5.747795602783668" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.11590421330323064s"></animate>
      <animate attributeName="r" values="7;0;0" keyTimes="0;0.9694721709071595;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.11590421330323064s"></animate>
    </circle><circle cx="73" cy="119.20312695292962" r="15" fill="#f8b26a">
      <animate attributeName="cy" values="119.20312695292962;-5.043283404271058" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4707119552458543s"></animate>
      <animate attributeName="r" values="15;0;0" keyTimes="0;0.998787028220034;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.4707119552458543s"></animate>
    </circle><circle cx="52" cy="107.78878095693592" r="6" fill="#f8b26a">
      <animate attributeName="cy" values="107.78878095693592;-1.8607187651511028" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9456048612559653s"></animate>
      <animate attributeName="r" values="6;0;0" keyTimes="0;0.9843680164502981;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.9456048612559653s"></animate>
    </circle><circle cx="59" cy="119.50550719399769" r="14" fill="#f8b26a">
      <animate attributeName="cy" values="119.50550719399769;-3.261564448293388" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0070758931525452s"></animate>
      <animate attributeName="r" values="14;0;0" keyTimes="0;0.8926896466921304;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.0070758931525452s"></animate>
    </circle><circle cx="32" cy="108.91695266534757" r="4" fill="#f8b26a">
      <animate attributeName="cy" values="108.91695266534757;-1.938617671451631" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1699913730552116s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.9916642231893105;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1699913730552116s"></animate>
    </circle><circle cx="62" cy="104.79901111192568" r="4" fill="#f8b26a">
      <animate attributeName="cy" values="104.79901111192568;14.895052336142552" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3083975073338618s"></animate>
      <animate attributeName="r" values="4;0;0" keyTimes="0;0.7032447801745549;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3083975073338618s"></animate>
    </circle><circle cx="35" cy="116.02478177792636" r="12" fill="#f8b26a">
      <animate attributeName="cy" values="116.02478177792636;0.23731489695789598" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.16209792583952445s"></animate>
      <animate attributeName="r" values="12;0;0" keyTimes="0;0.6814868421760004;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.16209792583952445s"></animate>
    </circle><circle cx="69" cy="118.37319182490604" r="2" fill="#f8b26a">
      <animate attributeName="cy" values="118.37319182490604;13.767993118410931" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3431530057011067s"></animate>
      <animate attributeName="r" values="2;0;0" keyTimes="0;0.9417631017076163;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.3431530057011067s"></animate>
    </circle><circle cx="54" cy="131.69995679386693" r="15" fill="#f8b26a">
      <animate attributeName="cy" values="131.69995679386693;-7.243601717183026" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1387847922762329s"></animate>
      <animate attributeName="r" values="15;0;0" keyTimes="0;0.905242888709739;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-1.1387847922762329s"></animate>
    </circle><circle cx="77" cy="113.256303670157" r="11" fill="#f8b26a">
      <animate attributeName="cy" values="113.256303670157;6.107768219404782" keyTimes="0;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2986106036020479s"></animate>
      <animate attributeName="r" values="11;0;0" keyTimes="0;0.92281771413421;1" dur="1.5873015873015872s" repeatCount="indefinite" begin="-0.2986106036020479s"></animate>
    </circle></g>
    </svg>
  <figcaption>로딩증...</figcaption>
</figure>
  `
}
const createEmptyCard = (size = 200, errorMessage="표시할 데이터가 존재하지 않습니다" ) =>{

  return /* html */`
  <figure class="empty-user-card">
    <svg width=${size} height=${size} viewBox="0 0 ${size} ${size}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      <mask id="mask0_50_2137" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="20" y="20" width="160" height="160">
      <path d="M180 100C180 111.881 177.405 123.168 172.746 133.308C160.119 160.865 132.292 180 100 180C67.7081 180 39.8811 160.865 27.2541 133.308C22.5946 123.168 20 111.881 20 100C20 55.8162 55.8162 20 100 20C144.184 20 180 55.8162 180 100Z" fill="#F4F7FC"/>
      </mask>
      <g mask="url(#mask0_50_2137)">
      <path d="M59.1667 121H140.833L155 134H45L59.1667 121Z" fill="url(#paint0_linear_50_2137)"/>
      <rect x="63" y="72" width="74" height="82" rx="3" fill="#E6EAF5"/>
      <path d="M76 134H45V235H155V134H125L121 147H80L76 134Z" fill="url(#paint1_linear_50_2137)"/>
      </g>
      <path d="M148.548 28C156.53 28 163 34.4702 163 42.4516C163 50.433 156.53 56.9032 148.548 56.9032H139.162L132.385 64.2787C131.549 65.1879 130.032 64.5968 130.032 63.362V55.8526C124.736 53.7088 121 48.5165 121 42.4516C121 34.4702 127.47 28 135.452 28H148.548Z" fill="url(#paint2_linear_50_2137)"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 150.807 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 141.774 42.4514)" fill="#F4F7FC"/>
      <circle r="2.25806" transform="matrix(-1 0 0 1 132.742 42.4514)" fill="#F4F7FC"/>
      <path d="M99.024 121.356C98.192 121.356 97.488 121.148 96.912 120.732C96.336 120.284 96.048 119.564 96.048 118.572C96.048 118.06 96.144 117.436 96.336 116.7C96.56 115.932 96.864 115.132 97.248 114.3C97.632 113.436 98.112 112.588 98.688 111.756C99.264 110.892 99.936 110.092 100.704 109.356C101.28 108.78 101.76 108.252 102.144 107.772C102.56 107.292 102.88 106.844 103.104 106.428C103.328 105.98 103.488 105.548 103.584 105.132C103.68 104.684 103.728 104.188 103.728 103.644C103.728 102.332 103.36 101.452 102.624 101.004C101.888 100.524 101.008 100.3 99.984 100.332C98.96 100.364 98.048 100.572 97.248 100.956C96.448 101.34 96.048 101.948 96.048 102.78C96.048 103.612 95.68 104.236 94.944 104.652C94.208 105.068 93.456 105.276 92.688 105.276C91.728 105.244 91.04 105.02 90.624 104.604C90.208 104.188 90 103.58 90 102.78C90 101.66 90.256 100.636 90.768 99.7077C91.312 98.7477 92.032 97.9317 92.928 97.2597C93.856 96.5877 94.928 96.0597 96.144 95.6757C97.392 95.2597 98.72 95.0357 100.128 95.0037C101.504 94.9717 102.784 95.1477 103.968 95.5317C105.152 95.8837 106.16 96.4437 106.992 97.2117C107.856 97.9797 108.512 98.9237 108.96 100.044C109.44 101.164 109.664 102.46 109.632 103.932C109.6 105.212 109.344 106.428 108.864 107.58C108.416 108.7 107.504 109.916 106.128 111.228C105.2 112.124 104.464 112.908 103.92 113.58C103.376 114.22 102.96 114.812 102.672 115.356C102.384 115.868 102.192 116.38 102.096 116.892C102.032 117.404 102 117.964 102 118.572C102 119.5 101.712 120.204 101.136 120.684C100.56 121.132 99.856 121.356 99.024 121.356ZM99.024 131.724C99.952 131.724 100.72 131.42 101.328 130.812C101.968 130.172 102.288 129.388 102.288 128.46C102.288 127.532 101.968 126.764 101.328 126.156C100.72 125.516 99.952 125.196 99.024 125.196C98.096 125.196 97.312 125.516 96.672 126.156C96.064 126.764 95.76 127.532 95.76 128.46C95.76 129.388 96.064 130.172 96.672 130.812C97.312 131.42 98.096 131.724 99.024 131.724Z" fill="url(#paint3_linear_50_2137)"/>
      <defs>
      <linearGradient id="paint0_linear_50_2137" x1="144.366" y1="135.174" x2="48.6921" y2="120.877" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      <linearGradient id="paint1_linear_50_2137" x1="102.879" y1="231.936" x2="102.711" y2="163.972" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D4D9E3"/>
      <stop offset="1" stop-color="#D2D5DC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_50_2137" x1="121.687" y1="69.0469" x2="158.543" y2="23.4883" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A7ABB6"/>
      <stop offset="1" stop-color="#C7CCD7"/>
      </linearGradient>
      <linearGradient id="paint3_linear_50_2137" x1="105" y1="138.5" x2="72.6675" y2="134.128" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9198AA"/>
      <stop offset="1" stop-color="#B4B8C4"/>
      </linearGradient>
      </defs>
      </svg>
      
    <figcaption>${errorMessage}</figcaption>
  </figure>`
}


export const renderEmptyCard = (target) =>{
  insertBefore(target,createEmptyCard())
 }

export const renderSpinner = (target) =>{
 insertBefore(target,createSpinner())
}


export const renderUserCard = (target,data) =>{
  insertLast(target,createUserCard(data))
}






// console.log(createUserCard({
//   id:1,
//   name:'losey',
//   email:'losey@hanmail.net',
//   website:'losey.com'}))