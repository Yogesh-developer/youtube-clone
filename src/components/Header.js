import React from "react";
import logo from "../assets/videohub-logo.png";
const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-2 h-15 shadow-sm">
      <img
        src="https://img.icons8.com/ios/50/null/menu--v1.png"
        alt="menu"
        className="w-8"
      />
      <img src={logo} alt="logo" className="w-20" />
      <div className="w-[50%] flex flex-row">
        <input
          type="text"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-11/12 border border-slate-300 rounded-tl-2xl rounded-bl-2xl py-1 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
        />
        <button
          type="submit"
          className="w-1/12 bg-gray-200 rounded-tr-2xl rounded-br-2xl p-1"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"
            alt="search"
          />
        </button>
      </div>
      <img
        src="https://lh3.googleusercontent.com/fife/AMPSemfr7-MPg-5vG5oDMPmxu47dXugd3NFH3IEaviUlfiBY1UR9Nd9Cacf7R5u3Pv8OSkcj3fHmjdatakWAoGHUA5TyQLvIFq5ZRt2Sg5KOj4-dkplhHoJVlRM2S5Jmcj4HHMMHeweMwC8sbUmltFNrXFqQ8NIRrTLt-9L7B4UCO5e6Nv1LbBJXzf9taYxBc1tAxsG5cnmYZsDF9oESnaeMsaanOnqa0xc0RoLJ1sRQG9Tzy5uxmMb1yayh0KjiUuR6N40Qnz8nbTURzezQBgMnyoNA20UUicp3zdbcRkNwmA-n5mXAor2eH0dKQLY3GIsiu4s6N5uz4OAzfydd5Ri-hIMMzWhWx8hPLFli-oulss-4X4i1N3PC0fJ5oVA3PRSWnYHjhIlrxCciTAscjSd0CY4cRPzLyLk9b7NmZbCezdUHsSZXiPR-yOKwoHA2_6kmXPHaI3Z1nMhZKURzMJObdG8Wmd2ATeXRkcaCDJj2qyJjpaCZg3gi-8aSh6WkNJ3H0VURVWGL0ejtWfw6b5P15CffwOqRZR3z19wyXbkpOfktUDW9k5B7-rYoBhTYr5rXyxww5pH9QVYfId9hAC4VeOo1Yi6SVMpMeeiatlxN3vGcgbeYoQq11Dfvw20HEvB3dRY9G6Nqpq1vatWA5StOaZ9qAohE2ebCdDXkKLLsJCUEfb7WPdHzDqQheRp7ItvcYScWhh_3AdjRZXpv3POXHDCsOPXdEVqYXE8TIk4iHZqolnXn3TqGODImOL7tHe3jjRwr2r8KFH01bMSttVqTNO0ExU2I80qwkTYSiY9oF9WdMK_Cbw1gOHX4gSBohl1xbESgjExSIDfjwNaVlu0vsCEGcSJuC1CRgn2CctTHfxVxG43lIzDCZ2dPw7T-T2Xhpdy3R4yXg6vJHic8Aw31C9CRwZbhYAL44ybJhDI3tbs6QVOp8iq8PjFfJkqL8LwOlapXRZuvl69xAmKI8G2g4eSx_K8UHvhWjlK5IbBV1_jNP-V0YtAMAzOyAg5cRn1bkcnlsCIu2OyHF1_PowPg9nsxJ6xAWGqIrHhPdzdn6nVz47NVeaHvL7vdIZBjGQmDMy2pjigjS9OHs5ALNc9ijBKF2wZbz1TfgbRLJXkF_hVRdLXzw7C3-gI7gRsIbUTnt7uPitnsbuJtSq-gQmpetnnXK7wmHWXuwlz1rrFP7pXC3W8uCdHFcf3kpxdhae2JuEElSzu78koFXc-fu1o1APRjsPSVMyWgo6ebCmM80iDwQCrGCP0zy5y3Budqwp0MASSpuo2KI6jNvQRO5KAjyfge4Z76Lx-tBDRxZ_y3wK235kT5Dr9PWyIjWZkK_rndtNmD_LNpxSQen2iBCpIkYfvkQY5ItfNQUVb4ylgJ=s32-c"
        alt="img"
        className="rounded-2xl"
      />
    </div>
  );
};

export default Header;
