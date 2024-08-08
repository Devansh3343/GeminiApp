import "./styles/splashscreen.css";
const SplashScreen = () => {
  return (
    <div id="loader-container">
      <svg
        id="loader"
        width="399"
        height="53"
        viewBox="0 0 399 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path"
          maskUnits="userSpaceOnUse"
          x="0.44364"
          y="0.31282"
          width="398"
          height="52"
          fill="black"
        >
          <rect fill="white" x="0.44364" y="0.31282" width="398" height="52" />
          <path d="M367.386 50V51H368.386H396.841H397.841V50V45V44H396.841H375.023V30.1818H395.023H396.023V29.1818V24.1818V23.1818H395.023H375.023V9.45453H396.477H397.477V8.45453V3.45453V2.45453H396.477H368.386H367.386V3.45453V50Z" />
          <path d="M356.998 11.3233C355.817 9.36058 354.337 7.67258 352.563 6.26482C350.802 4.84091 348.798 3.74909 346.559 2.98655C344.324 2.20463 341.924 1.81818 339.369 1.81818C336.258 1.81818 333.383 2.39531 330.758 3.56369C328.139 4.7295 325.87 6.40807 323.958 8.5911C322.043 10.7778 320.572 13.412 319.536 16.4749L319.535 16.4778C318.51 19.5367 318.006 22.9572 318.006 26.7273C318.006 31.7522 318.89 36.1499 320.696 39.8895L320.698 39.8926C322.515 43.6219 325.061 46.5282 328.34 48.5755L328.342 48.5767C331.64 50.6261 335.449 51.6364 339.733 51.6364C343.573 51.6364 347.014 50.8326 350.028 49.1971L350.03 49.1963C353.056 47.5472 355.432 45.2187 357.145 42.2255C358.883 39.2162 359.733 35.705 359.733 31.7273V26.7273V25.7273H358.733H341.006H340.006V26.7273V31.7273V32.7273H341.006H352.23C352.075 34.8581 351.549 36.7146 350.674 38.3157L350.673 38.3179C349.625 40.2458 348.168 41.7293 346.289 42.7872C344.428 43.828 342.253 44.3636 339.733 44.3636C337.028 44.3636 334.621 43.697 332.486 42.3768C330.366 41.0654 328.66 39.1211 327.382 36.4945C326.117 33.8932 325.46 30.6508 325.46 26.7273C325.46 22.8024 326.11 19.5585 327.361 16.9561C328.626 14.3263 330.304 12.3825 332.38 11.073C334.473 9.753 336.794 9.0909 339.369 9.0909C340.961 9.0909 342.401 9.3059 343.699 9.72443C345.002 10.145 346.154 10.7506 347.163 11.5382L347.163 11.5382L347.168 11.5422C348.198 12.3351 349.084 13.2968 349.828 14.4339L349.832 14.4399L349.836 14.4458C350.597 15.5737 351.217 16.8597 351.692 18.3106L351.917 19H352.642H358.46H359.666L359.443 17.8153C358.998 15.4475 358.185 13.2806 356.998 11.3233ZM356.998 11.3233C356.998 11.324 356.999 11.3247 356.999 11.3254L356.142 11.8409M356.998 11.3233C356.997 11.323 356.997 11.3226 356.997 11.3223L356.142 11.8409M356.142 11.8409C357.095 13.4127 357.797 15.1324 358.246 17M356.142 11.8409C355.021 9.97727 353.619 8.37878 351.938 7.04545C350.271 5.69696 348.369 4.65908 346.233 3.93181L358.246 17M358.246 17H358.46V18L357.477 18.1847C357.466 18.1229 357.454 18.0614 357.442 18M358.246 17L357.442 18M357.442 18H352.642C352.142 16.4697 351.483 15.0985 350.665 13.8864C349.862 12.6591 348.9 11.6136 347.778 10.75C346.672 9.88636 345.415 9.22727 344.006 8.77272C342.597 8.31818 341.051 8.0909 339.369 8.0909C336.612 8.0909 334.104 8.80303 331.847 10.2273C329.589 11.6515 327.794 13.75 326.46 16.5227C325.127 19.2955 324.46 22.697 324.46 26.7273C324.46 30.7576 325.134 34.1591 326.483 36.9318C327.831 39.7045 329.657 41.803 331.96 43.2273C334.263 44.6515 336.854 45.3636 339.733 45.3636C342.4 45.3636 344.748 44.7955 346.778 43.6591L357.442 18Z" />
          <path d="M278.886 50V51H279.886H285.523H286.523V50V32.8182H295.705C295.906 32.8182 296.105 32.8164 296.302 32.8127L305.824 50.4745L306.108 51H306.705H313.25H314.938L314.127 49.5195L304.162 31.3299C304.466 31.1992 304.762 31.0597 305.05 30.9113L305.054 30.9089C307.535 29.6118 309.41 27.8064 310.634 25.49C311.842 23.2054 312.432 20.6091 312.432 17.7273C312.432 14.8451 311.842 12.2361 310.637 9.92421C309.414 7.57707 307.532 5.74766 305.036 4.43431C302.514 3.0922 299.354 2.45453 295.614 2.45453H279.886H278.886V3.45453V50ZM295.523 25.7273H286.523V9.45453H295.432C297.858 9.45453 299.709 9.82932 301.049 10.5063L301.049 10.5063L301.056 10.5098C302.411 11.1806 303.356 12.1077 303.946 13.2881C304.562 14.5185 304.886 15.9887 304.886 17.7273C304.886 19.467 304.561 20.9085 303.953 22.0863L303.951 22.0902C303.382 23.2021 302.452 24.0873 301.093 24.7331L301.09 24.7348C299.759 25.3738 297.924 25.7273 295.523 25.7273Z" />
          <path d="M256.969 11.0746L256.972 11.0762C259.076 12.3865 260.768 14.3296 262.031 16.9561L262.033 16.9601C263.298 19.5613 263.955 22.8038 263.955 26.7273C263.955 30.6508 263.298 33.8932 262.033 36.4944L262.031 36.4984C260.768 39.1249 259.076 41.0681 256.972 42.3783L256.969 42.3799C254.864 43.6992 252.504 44.3636 249.864 44.3636C247.224 44.3636 244.856 43.6994 242.734 42.3789C240.644 41.0687 238.952 39.1248 237.673 36.4965C236.422 33.8945 235.773 30.6512 235.773 26.7273C235.773 22.8033 236.422 19.56 237.673 16.958C238.952 14.3296 240.644 12.3858 242.734 11.0755C244.856 9.75509 247.224 9.0909 249.864 9.0909C252.504 9.0909 254.864 9.7553 256.969 11.0746ZM268.646 39.8987C270.501 36.1568 271.409 31.7557 271.409 26.7273C271.409 21.6989 270.501 17.2978 268.646 13.5558C266.799 9.83075 264.248 6.92679 260.986 4.8802C257.722 2.83214 254.004 1.81818 249.864 1.81818C245.723 1.81818 242.005 2.83214 238.741 4.8802C235.48 6.92679 232.928 9.83075 231.081 13.5558C229.226 17.2978 228.318 21.6989 228.318 26.7273C228.318 31.7557 229.226 36.1568 231.081 39.8987C232.928 43.6238 235.48 46.5277 238.741 48.5743C242.005 50.6224 245.723 51.6364 249.864 51.6364C254.004 51.6364 257.722 50.6224 260.986 48.5743C264.248 46.5277 266.799 43.6238 268.646 39.8987Z" />
          <path d="M192.574 50V51H193.574H199.21H200.21V50V30.1818H219.392H220.392V29.1818V24.1818V23.1818H219.392H200.21V9.45453H221.483H222.483V8.45453V3.45453V2.45453H221.483H193.574H192.574V3.45453V50Z" />
          <path d="M183.295 3.45453V2.45453H182.295H176.75H175.75V3.45453V37.5532L151.662 2.88394L151.364 2.45453H150.841H145.386H144.386V3.45453V50V51H145.386H151.023H152.023V50V15.9943L176.019 50.5702L176.318 51H176.841H182.295H183.295V50V3.45453Z" />
          <path d="M135.085 3.45453V2.45453H134.085H128.449H127.449V3.45453V50V51H128.449H134.085H135.085V50V3.45453Z" />
          <path d="M87.1079 51H87.8141L88.0503 50.3345L92.4935 37.8182H109.904L114.347 50.3345L114.584 51H115.29H121.199H122.631L122.138 49.6553L105.047 3.10984L104.806 2.45453H104.108H98.2898H97.5917L97.351 3.10984L80.2601 49.6553L79.7664 51H81.1989H87.1079ZM101.199 13.2952L107.419 30.8182H94.9784L101.199 13.2952Z" />
          <path d="M43.2614 50V51H44.2614H49.8977H50.8977V50V32.8182H60.0795C60.2805 32.8182 60.4797 32.8164 60.6773 32.8127L70.1993 50.4745L70.4826 51H71.0795H77.625H79.313L78.502 49.5195L68.5373 31.3299C68.8413 31.1992 69.1372 31.0597 69.4247 30.9113L69.4293 30.9089C71.9099 29.6118 73.7847 27.8064 75.0091 25.49C76.2167 23.2054 76.8068 20.6091 76.8068 17.7273C76.8068 14.8451 76.2166 12.2361 75.0118 9.92421C73.7886 7.57707 71.907 5.74766 69.4109 4.43431C66.8892 3.0922 63.7293 2.45453 59.9886 2.45453H44.2614H43.2614V3.45453V50ZM59.8977 25.7273H50.8977V9.45453H59.8068C62.233 9.45453 64.0836 9.82932 65.4242 10.5063L65.4242 10.5063L65.4313 10.5098C66.7862 11.1806 67.7313 12.1077 68.3215 13.2881C68.9367 14.5186 69.2614 15.9887 69.2614 17.7273C69.2614 19.467 68.9363 20.9085 68.3275 22.0863L68.3256 22.0902C67.757 23.2021 66.8274 24.0873 65.4685 24.7331L65.465 24.7348C64.1338 25.3738 62.2986 25.7273 59.8977 25.7273Z" />
          <path d="M1.63635 50V51H2.63635H19.4545C23.2086 51 26.3482 50.4433 28.8167 49.2663C31.2547 48.1038 33.0991 46.4982 34.2782 44.4264C35.432 42.3989 36 40.1274 36 37.6363C36 35.0517 35.4892 32.795 34.4137 30.9129C33.3749 29.0951 32.0628 27.6631 30.4658 26.6545C29.7675 26.2135 29.0616 25.856 28.3488 25.5866C28.8809 25.3252 29.3957 25.0288 29.8931 24.6974C31.1915 23.8425 32.2243 22.6847 32.9933 21.2483C33.8074 19.7567 34.1818 17.9281 34.1818 15.8182C34.1818 13.3884 33.6294 11.1524 32.5122 9.13102C31.3775 7.06271 29.6576 5.43886 27.3992 4.25229C25.1064 3.03234 22.258 2.45453 18.9091 2.45453H2.63635H1.63635V3.45453V50ZM27.5726 33.7844L27.5752 33.7886C28.2832 34.9642 28.6364 36.24 28.6364 37.6363C28.6364 39.3908 27.9816 40.8703 26.6175 42.1285C25.3531 43.2935 23.0575 44 19.4545 44H9.27272V29.8182H19.7273C21.6221 29.8182 23.207 30.1992 24.5174 30.9213L24.5174 30.9213L24.5243 30.925C25.8629 31.649 26.8689 32.6026 27.5726 33.7844ZM22.8829 22.0088L22.879 22.0107C21.6675 22.603 20.2901 22.9091 18.7273 22.9091H9.27272V9.45453H18.9091C21.8711 9.45453 23.8134 10.1471 24.971 11.317L24.9747 11.3207C26.2082 12.5542 26.8182 14.0333 26.8182 15.8182C26.8182 17.2798 26.4557 18.5038 25.762 19.5314L25.762 19.5314L25.7572 19.5386C25.0587 20.593 24.109 21.4159 22.8829 22.0088Z" />
        </mask>
        <path
          d="M367.386 50V51H368.386H396.841H397.841V50V45V44H396.841H375.023V30.1818H395.023H396.023V29.1818V24.1818V23.1818H395.023H375.023V9.45453H396.477H397.477V8.45453V3.45453V2.45453H396.477H368.386H367.386V3.45453V50Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M356.998 11.3233C355.817 9.36058 354.337 7.67258 352.563 6.26482C350.802 4.84091 348.798 3.74909 346.559 2.98655C344.324 2.20463 341.924 1.81818 339.369 1.81818C336.258 1.81818 333.383 2.39531 330.758 3.56369C328.139 4.7295 325.87 6.40807 323.958 8.5911C322.043 10.7778 320.572 13.412 319.536 16.4749L319.535 16.4778C318.51 19.5367 318.006 22.9572 318.006 26.7273C318.006 31.7522 318.89 36.1499 320.696 39.8895L320.698 39.8926C322.515 43.6219 325.061 46.5282 328.34 48.5755L328.342 48.5767C331.64 50.6261 335.449 51.6364 339.733 51.6364C343.573 51.6364 347.014 50.8326 350.028 49.1971L350.03 49.1963C353.056 47.5472 355.432 45.2187 357.145 42.2255C358.883 39.2162 359.733 35.705 359.733 31.7273V26.7273V25.7273H358.733H341.006H340.006V26.7273V31.7273V32.7273H341.006H352.23C352.075 34.8581 351.549 36.7146 350.674 38.3157L350.673 38.3179C349.625 40.2458 348.168 41.7293 346.289 42.7872C344.428 43.828 342.253 44.3636 339.733 44.3636C337.028 44.3636 334.621 43.697 332.486 42.3768C330.366 41.0654 328.66 39.1211 327.382 36.4945C326.117 33.8932 325.46 30.6508 325.46 26.7273C325.46 22.8024 326.11 19.5585 327.361 16.9561C328.626 14.3263 330.304 12.3825 332.38 11.073C334.473 9.753 336.794 9.0909 339.369 9.0909C340.961 9.0909 342.401 9.3059 343.699 9.72443C345.002 10.145 346.154 10.7506 347.163 11.5382L347.163 11.5382L347.168 11.5422C348.198 12.3351 349.084 13.2968 349.828 14.4339L349.832 14.4399L349.836 14.4458C350.597 15.5737 351.217 16.8597 351.692 18.3106L351.917 19H352.642H358.46H359.666L359.443 17.8153C358.998 15.4475 358.185 13.2806 356.998 11.3233ZM356.998 11.3233C356.998 11.324 356.999 11.3247 356.999 11.3254L356.142 11.8409M356.998 11.3233C356.997 11.323 356.997 11.3226 356.997 11.3223L356.142 11.8409M356.142 11.8409C357.095 13.4127 357.797 15.1324 358.246 17M356.142 11.8409C355.021 9.97727 353.619 8.37878 351.938 7.04545C350.271 5.69696 348.369 4.65908 346.233 3.93181L358.246 17M358.246 17H358.46V18L357.477 18.1847C357.466 18.1229 357.454 18.0614 357.442 18M358.246 17L357.442 18M357.442 18H352.642C352.142 16.4697 351.483 15.0985 350.665 13.8864C349.862 12.6591 348.9 11.6136 347.778 10.75C346.672 9.88636 345.415 9.22727 344.006 8.77272C342.597 8.31818 341.051 8.0909 339.369 8.0909C336.612 8.0909 334.104 8.80303 331.847 10.2273C329.589 11.6515 327.794 13.75 326.46 16.5227C325.127 19.2955 324.46 22.697 324.46 26.7273C324.46 30.7576 325.134 34.1591 326.483 36.9318C327.831 39.7045 329.657 41.803 331.96 43.2273C334.263 44.6515 336.854 45.3636 339.733 45.3636C342.4 45.3636 344.748 44.7955 346.778 43.6591L357.442 18Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M278.886 50V51H279.886H285.523H286.523V50V32.8182H295.705C295.906 32.8182 296.105 32.8164 296.302 32.8127L305.824 50.4745L306.108 51H306.705H313.25H314.938L314.127 49.5195L304.162 31.3299C304.466 31.1992 304.762 31.0597 305.05 30.9113L305.054 30.9089C307.535 29.6118 309.41 27.8064 310.634 25.49C311.842 23.2054 312.432 20.6091 312.432 17.7273C312.432 14.8451 311.842 12.2361 310.637 9.92421C309.414 7.57707 307.532 5.74766 305.036 4.43431C302.514 3.0922 299.354 2.45453 295.614 2.45453H279.886H278.886V3.45453V50ZM295.523 25.7273H286.523V9.45453H295.432C297.858 9.45453 299.709 9.82932 301.049 10.5063L301.049 10.5063L301.056 10.5098C302.411 11.1806 303.356 12.1077 303.946 13.2881C304.562 14.5185 304.886 15.9887 304.886 17.7273C304.886 19.467 304.561 20.9085 303.953 22.0863L303.951 22.0902C303.382 23.2021 302.452 24.0873 301.093 24.7331L301.09 24.7348C299.759 25.3738 297.924 25.7273 295.523 25.7273Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M256.969 11.0746L256.972 11.0762C259.076 12.3865 260.768 14.3296 262.031 16.9561L262.033 16.9601C263.298 19.5613 263.955 22.8038 263.955 26.7273C263.955 30.6508 263.298 33.8932 262.033 36.4944L262.031 36.4984C260.768 39.1249 259.076 41.0681 256.972 42.3783L256.969 42.3799C254.864 43.6992 252.504 44.3636 249.864 44.3636C247.224 44.3636 244.856 43.6994 242.734 42.3789C240.644 41.0687 238.952 39.1248 237.673 36.4965C236.422 33.8945 235.773 30.6512 235.773 26.7273C235.773 22.8033 236.422 19.56 237.673 16.958C238.952 14.3296 240.644 12.3858 242.734 11.0755C244.856 9.75509 247.224 9.0909 249.864 9.0909C252.504 9.0909 254.864 9.7553 256.969 11.0746ZM268.646 39.8987C270.501 36.1568 271.409 31.7557 271.409 26.7273C271.409 21.6989 270.501 17.2978 268.646 13.5558C266.799 9.83075 264.248 6.92679 260.986 4.8802C257.722 2.83214 254.004 1.81818 249.864 1.81818C245.723 1.81818 242.005 2.83214 238.741 4.8802C235.48 6.92679 232.928 9.83075 231.081 13.5558C229.226 17.2978 228.318 21.6989 228.318 26.7273C228.318 31.7557 229.226 36.1568 231.081 39.8987C232.928 43.6238 235.48 46.5277 238.741 48.5743C242.005 50.6224 245.723 51.6364 249.864 51.6364C254.004 51.6364 257.722 50.6224 260.986 48.5743C264.248 46.5277 266.799 43.6238 268.646 39.8987Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M192.574 50V51H193.574H199.21H200.21V50V30.1818H219.392H220.392V29.1818V24.1818V23.1818H219.392H200.21V9.45453H221.483H222.483V8.45453V3.45453V2.45453H221.483H193.574H192.574V3.45453V50Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M183.295 3.45453V2.45453H182.295H176.75H175.75V3.45453V37.5532L151.662 2.88394L151.364 2.45453H150.841H145.386H144.386V3.45453V50V51H145.386H151.023H152.023V50V15.9943L176.019 50.5702L176.318 51H176.841H182.295H183.295V50V3.45453Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M135.085 3.45453V2.45453H134.085H128.449H127.449V3.45453V50V51H128.449H134.085H135.085V50V3.45453Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M87.1079 51H87.8141L88.0503 50.3345L92.4935 37.8182H109.904L114.347 50.3345L114.584 51H115.29H121.199H122.631L122.138 49.6553L105.047 3.10984L104.806 2.45453H104.108H98.2898H97.5917L97.351 3.10984L80.2601 49.6553L79.7664 51H81.1989H87.1079ZM101.199 13.2952L107.419 30.8182H94.9784L101.199 13.2952Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M43.2614 50V51H44.2614H49.8977H50.8977V50V32.8182H60.0795C60.2805 32.8182 60.4797 32.8164 60.6773 32.8127L70.1993 50.4745L70.4826 51H71.0795H77.625H79.313L78.502 49.5195L68.5373 31.3299C68.8413 31.1992 69.1372 31.0597 69.4247 30.9113L69.4293 30.9089C71.9099 29.6118 73.7847 27.8064 75.0091 25.49C76.2167 23.2054 76.8068 20.6091 76.8068 17.7273C76.8068 14.8451 76.2166 12.2361 75.0118 9.92421C73.7886 7.57707 71.907 5.74766 69.4109 4.43431C66.8892 3.0922 63.7293 2.45453 59.9886 2.45453H44.2614H43.2614V3.45453V50ZM59.8977 25.7273H50.8977V9.45453H59.8068C62.233 9.45453 64.0836 9.82932 65.4242 10.5063L65.4242 10.5063L65.4313 10.5098C66.7862 11.1806 67.7313 12.1077 68.3215 13.2881C68.9367 14.5186 69.2614 15.9887 69.2614 17.7273C69.2614 19.467 68.9363 20.9085 68.3275 22.0863L68.3256 22.0902C67.757 23.2021 66.8274 24.0873 65.4685 24.7331L65.465 24.7348C64.1338 25.3738 62.2986 25.7273 59.8977 25.7273Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
        <path
          d="M1.63635 50V51H2.63635H19.4545C23.2086 51 26.3482 50.4433 28.8167 49.2663C31.2547 48.1038 33.0991 46.4982 34.2782 44.4264C35.432 42.3989 36 40.1274 36 37.6363C36 35.0517 35.4892 32.795 34.4137 30.9129C33.3749 29.0951 32.0628 27.6631 30.4658 26.6545C29.7675 26.2135 29.0616 25.856 28.3488 25.5866C28.8809 25.3252 29.3957 25.0288 29.8931 24.6974C31.1915 23.8425 32.2243 22.6847 32.9933 21.2483C33.8074 19.7567 34.1818 17.9281 34.1818 15.8182C34.1818 13.3884 33.6294 11.1524 32.5122 9.13102C31.3775 7.06271 29.6576 5.43886 27.3992 4.25229C25.1064 3.03234 22.258 2.45453 18.9091 2.45453H2.63635H1.63635V3.45453V50ZM27.5726 33.7844L27.5752 33.7886C28.2832 34.9642 28.6364 36.24 28.6364 37.6363C28.6364 39.3908 27.9816 40.8703 26.6175 42.1285C25.3531 43.2935 23.0575 44 19.4545 44H9.27272V29.8182H19.7273C21.6221 29.8182 23.207 30.1992 24.5174 30.9213L24.5174 30.9213L24.5243 30.925C25.8629 31.649 26.8689 32.6026 27.5726 33.7844ZM22.8829 22.0088L22.879 22.0107C21.6675 22.603 20.2901 22.9091 18.7273 22.9091H9.27272V9.45453H18.9091C21.8711 9.45453 23.8134 10.1471 24.971 11.317L24.9747 11.3207C26.2082 12.5542 26.8182 14.0333 26.8182 15.8182C26.8182 17.2798 26.4557 18.5038 25.762 19.5314L25.762 19.5314L25.7572 19.5386C25.0587 20.593 24.109 21.4159 22.8829 22.0088Z"
          stroke="white"
          stroke-width="2"
          mask="url(#path)"
        />
      </svg>
    </div>
  );
};
export default SplashScreen;
