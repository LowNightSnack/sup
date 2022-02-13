import { Component } from "react";
import CustomLink from "../components/common/CustomLink";
import HomeLayout from "../layouts/HomeLayout";
import Footer from "../components/Footer";

const siteTitle = "'Sup? | Home";

class Home extends Component {
  state = {};
  render() {
    return (
      <HomeLayout siteTitle={siteTitle}>
        <div className="p-20 flex flex-col h-screen items-center bg-blue-700 text-white scroll-snap-start">
          <div className="w-full flex-1 flex items-center">
            <svg
              className="w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <metadata>Icon made by Freepik (freepik.com)</metadata>
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M2542 5095 c-29 -37 -36 -151 -25 -406 7 -163 13 -221 25 -244 11
-20 13 -36 7 -46 -13 -25 -32 -245 -27 -320 4 -46 14 -86 32 -124 l27 -55 -86
-160 c-48 -88 -95 -169 -104 -179 -9 -11 -136 -60 -301 -116 -410 -140 -486
-174 -630 -278 -82 -60 -228 -212 -285 -297 -122 -184 -165 -307 -229 -651
-119 -637 -176 -1112 -176 -1453 0 -185 10 -258 49 -374 70 -201 183 -319 355
-369 l78 -23 1464 0 c1302 0 1469 2 1502 16 176 73 176 335 0 408 -32 14 -98
16 -437 16 l-401 0 -4 23 c-8 38 -29 1207 -24 1309 5 93 12 116 187 635 100
296 186 565 191 598 8 45 4 157 -16 454 l-25 394 34 36 c77 80 93 155 77 349
-7 75 -16 145 -22 155 -7 14 -5 29 8 55 17 33 19 68 19 333 0 278 -1 298 -19
318 -30 33 -92 29 -147 -11 -54 -39 -169 -158 -252 -260 l-62 -78 -161 0 -161
0 -49 62 c-75 96 -224 248 -273 280 -59 37 -112 38 -139 3z m250 -358 c46 -56
95 -114 110 -129 l26 -28 226 0 c140 0 234 4 248 11 13 6 46 41 75 77 29 37
78 96 110 131 l59 64 -4 -169 -4 -169 -29 -33 c-36 -41 -37 -77 -5 -140 20
-39 25 -68 31 -167 5 -110 4 -123 -14 -152 -33 -53 -268 -228 -388 -289 l-72
-37 -53 28 c-67 35 -144 87 -280 187 -139 103 -143 111 -134 276 6 109 10 129
32 161 35 52 31 93 -16 146 -15 17 -19 49 -25 189 -8 198 -17 194 107 43z m33
-1025 c96 -68 206 -135 252 -153 15 -6 54 -11 85 -11 70 0 131 27 269 117 54
35 99 59 99 52 0 -6 9 -159 21 -338 25 -388 48 -267 -184 -951 -121 -357 -168
-510 -177 -575 -11 -70 -11 -201 -1 -658 6 -314 14 -612 17 -662 l6 -93 -51 0
c-44 0 -51 3 -56 23 -2 12 -43 310 -90 662 -82 615 -89 662 -199 1205 -99 489
-118 567 -137 582 -41 34 -115 15 -131 -34 -7 -20 18 -166 106 -605 63 -318
118 -600 121 -628 l6 -50 -29 51 c-64 114 -132 197 -230 280 -85 72 -134 98
-168 90 -39 -10 -64 -42 -64 -82 0 -39 17 -59 109 -129 185 -140 311 -407 311
-659 0 -236 -88 -436 -268 -615 l-95 -94 -177 6 c-290 11 -445 47 -665 157
-87 43 -153 70 -173 70 -72 0 -101 -94 -43 -143 80 -67 316 -166 511 -215
l105 -26 1121 -6 c1219 -5 1154 -2 1154 -61 0 -64 99 -60 -1481 -57 -1322 3
-1438 4 -1484 20 -110 38 -185 124 -239 278 -29 81 -31 93 -34 275 -5 274 18
525 93 1009 42 264 108 622 130 703 50 178 172 384 296 499 148 136 275 199
703 345 181 62 336 121 345 130 9 10 59 96 111 192 52 96 100 172 105 169 6
-3 50 -34 100 -70z m75 -2997 c17 -126 32 -240 35 -252 l5 -23 -171 0 -171 0
36 40 c95 106 182 273 213 413 10 44 19 73 20 65 2 -7 16 -116 33 -243z"
                />
              </g>
            </svg>
            <span className="text-5xl font-extrabold">'Sup?</span>
          </div>
          <snap className="p-3 rounded-full transition-all hover:translate-y-2 hover:bg-opacity-20 hover:bg-white active:bg-opacity-30 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
              />
            </svg>
          </snap>
        </div>
        <div className="flex flex-col h-screen scroll-snap-start">
          <div className="flex-1 flex justify-center items-center">
            <p className="text-6xl">WIP</p>
          </div>
          <div className="text-2xl flex p-12 justify-between">
            <CustomLink linkHref="/users/login" linkText="Login" />{" "}
            <CustomLink linkHref="/test" linkText="test" />{" "}
            <CustomLink linkHref="/test1" linkText="test1" />{" "}
            <CustomLink linkHref="/test2" linkText="test2" />
          </div>
          <Footer />
        </div>
      </HomeLayout>
    );
  }
}

export default Home;
