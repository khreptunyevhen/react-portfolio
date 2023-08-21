import { Link } from "react-router-dom";

import "./styles/logo.css";

const Logo = ({ setActiveTab }) => {
  return (
    <Link to={"/"} className="logo" onClick={() => setActiveTab(0)}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="408.000000pt"
        height="420.000000pt"
        viewBox="0 0 408.000000 420.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,420.000000) scale(0.100000,-0.100000)"
          fill={"#4da31b"}
          stroke="none"
        >
          <path
            d="M1925 3974 c-415 -40 -726 -157 -1037 -391 -659 -497 -925 -1373
-653 -2153 303 -869 1196 -1405 2105 -1264 836 130 1494 802 1605 1643 17 126
19 343 5 461 -30 239 -86 425 -196 645 -277 558 -797 941 -1413 1039 -94 16
-342 27 -416 20z m-1006 -1314 c24 0 31 -63 31 -264 0 -213 0 -213 25 -240 13
-14 36 -31 50 -36 16 -6 171 -10 381 -10 385 0 389 1 433 56 20 25 21 39 21
245 0 206 1 220 20 239 11 11 27 20 35 20 8 0 24 -9 35 -20 19 -19 20 -33 20
-232 0 -119 -5 -230 -11 -251 -13 -47 -70 -112 -120 -138 -33 -17 -60 -19
-209 -19 l-170 0 0 -260 c0 -247 -1 -261 -20 -280 -24 -24 -38 -25 -68 -4 -22
15 -22 18 -22 279 l0 264 -184 3 -184 3 -44 31 c-26 19 -54 53 -70 84 l-28 52
0 229 c0 225 0 228 22 244 13 8 29 13 36 10 8 -3 17 -5 21 -5z m1291 -10 c20
-20 20 -33 20 -590 0 -557 0 -570 -20 -590 -11 -11 -27 -20 -35 -20 -8 0 -24
9 -35 20 -20 20 -20 33 -20 590 0 557 0 570 20 590 11 11 27 20 35 20 8 0 24
-9 35 -20z m1019 4 c23 -16 23 -18 19 -183 -3 -164 -4 -167 -35 -231 -32 -66
-73 -117 -127 -158 l-30 -23 25 -16 c46 -32 100 -98 132 -162 31 -65 32 -68
35 -231 4 -156 3 -166 -17 -184 -27 -24 -68 -14 -81 20 -6 14 -10 87 -10 162
0 123 -3 142 -24 188 -30 63 -85 120 -145 148 -42 19 -67 21 -306 24 -159 2
-265 8 -272 14 -7 6 -13 23 -13 39 0 15 6 31 13 36 6 4 129 10 272 13 237 5
264 7 305 26 60 28 117 86 146 148 21 46 24 65 24 188 0 168 5 185 60 197 3 0
16 -6 29 -15z"
          />
        </g>
      </svg>
      <div className="logo__description">
        <p>
          Yevhen <span>Khreptun</span>
        </p>
        <p>
          <span>Web</span> Developer
        </p>
      </div>
    </Link>
  );
};

export default Logo;
