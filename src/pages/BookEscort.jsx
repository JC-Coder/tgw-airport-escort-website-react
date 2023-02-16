import React, { useEffect, useState } from "react";
import "../assets/css/bookEscort.css";
import { Navbar } from "../components";
import styles from "../style";

const BookEscort = () => {
  const [subTotal, setSubtotal] = useState(0);
  const [tshirtsTotal, setTshirtsTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [categoryState, setCategoryState] = useState({
    escortTotal: 0,
    transportTotal: 0,
    securityTotal: 0,
  });

  const categories = {
    escort: "escort",
    transport: "transport",
    security: "security",
  };

  function handleChange(e) {
    let category = e.target.dataset.category;
    let isChecked = e.target.checked;
    let value = parseInt(e.target.value);

    if (Object.keys(categories).includes(category) && isChecked) {
      setCategoryState((prev) => ({
        ...prev,
        [`${category}Total`]: prev[`${category}Total`] + value,
      }));
    } else if (Object.keys(categories).includes(category) && !isChecked) {
      setCategoryState((prev) => ({
        ...prev,
        [`${category}Total`]: prev[`${category}Total`] - value,
      }));
    }
  }

  // handle sub total
  useEffect(() => {
    let arrayFromCategoryState = Object.values(categoryState);
    setSubtotal(arrayFromCategoryState.reduce((a, b) => a + b, 0));
  }, [categoryState]);

  // handle total
  useEffect(() => {
    let discountPrice = 25;
    setTotal(() => (subTotal > 30 ? subTotal - discountPrice : 0));
  }, [subTotal]);

  const [queenCheckboxes, setQueenCheckboxes] = useState({});
  const [kingCheckboxes, setKingCheckboxes] = useState({});

  function handleQueenTshirtChange(e) {
    setQueenCheckboxes({
      ...queenCheckboxes,
      [e.target.dataset.category]: e.target.checked,
    });
  }

  function handleKingTshirtChange(e) {
    setKingCheckboxes({
      ...kingCheckboxes,
      [e.target.dataset.category]: e.target.checked,
    });
  }

  // update prices on tshirt select
  useEffect(() => {
    const isAtLeastOneQueenCheckboxChecked = Object.values(
      queenCheckboxes
    ).some((checkbox) => checkbox === true);
    const isAtLeastOneKingCheckboxChecked = Object.values(kingCheckboxes).some(
      (checkbox) => checkbox === true
    );

    let queenValue = 0;
    let kingValue = 0;

    if (isAtLeastOneQueenCheckboxChecked) {
      queenValue = 25;
    }

    if (isAtLeastOneKingCheckboxChecked) {
      kingValue = 25;
    }

    if (!isAtLeastOneQueenCheckboxChecked) {
      queenValue = 0;
    }

    if (!isAtLeastOneKingCheckboxChecked) {
      kingValue = 0;
    }

    setTshirtsTotal(() => kingValue + queenValue);
  }, [queenCheckboxes, kingCheckboxes, tshirtsTotal]);

  return (
    <div>
      <div className={`banner ${styles.paddingX}`}>
        <Navbar />

        <div className="flex items-center justify-center h-[25vh]">
          <h1 className="text-white font-bold md:text-6xl text-4xl">
            Book An Escort
          </h1>
        </div>
      </div>

      <div className={`${styles.paddingX}`}>
        <p className="text-center font-medium mt-[3rem]">
          Thank you for the opportunity to allow us to make your visit to
          Nigeria as stress free as possible. Our Airport Escort will greet you
          once you arrive and guide you through the Immigration Lines as quickly
          as possible. You can have one loved one meet you right outside of the
          Security Door. To customize your experience please select your
          preferences below.{" "}
        </p>
      </div>

      {/* form component */}
      <div className={`flex justify-center my-[5rem] ${styles.paddingX}`}>
        <form class="w-full max-w-lg">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className={`${styles.formLabel}`} for="grid-first-name">
                Name
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label className={`${styles.formLabel}`} for="grid-last-name">
                Phone
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-last-name"
                type="number"
                placeholder="+1 (256) 543221"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="email">
                Email
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-password"
                type="email"
                placeholder="jane@gmail.com"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className={`${styles.formLabel}`} for="grid-first-name">
                Arrival Date
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-first-name"
                type="date"
                placeholder=""
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label className={`${styles.formLabel}`} for="grid-last-name">
                Arrival Time
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-last-name"
                type="time"
                placeholder=""
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className={`${styles.formLabel}`} for="grid-first-name">
                Airline
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-first-name"
                type="text"
                placeholder="British Airline"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label className={`${styles.formLabel}`} for="grid-last-name">
                Depature Date
              </label>
              <input
                className={`${styles.formInput}`}
                id="grid-last-name"
                type="date"
                placeholder=""
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="no_of_persons">
                How many persons will be arriving?
              </label>
              <input
                className={`${styles.formInput}`}
                id=""
                type="number"
                placeholder="e.g 3"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="">
                Will you have children accommodating you? If so, how many and
                ages?
              </label>
              <input
                className={`${styles.formInput}`}
                id=""
                type="text"
                placeholder="e.g 2, ages 12, 15"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="">
                I need escort service for
              </label>

              <div class="flex items-center mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="150"
                  onChange={handleChange}
                  data-category="escort"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  Arrival Only $150pp
                </label>
              </div>

              <div class="flex items-center mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="150"
                  onChange={handleChange}
                  data-category="escort"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  Departure Only $150pp
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="275"
                  onChange={handleChange}
                  data-category="escort"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  Both Arrival and Departure $275pp
                </label>
              </div>
            </div>
          </div>

          <div>
            <p className={`${styles.formLabel}`}>
              Will someone be in Nigeria to greet you at the airport? If yes,
              then please answer below
            </p>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  className={`${styles.formInput}`}
                  id="grid-first-name"
                  type="text"
                  placeholder="e.g James Michael"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2"
                  for="grid-last-name"
                >
                  Phone
                </label>
                <input
                  className={`${styles.formInput}`}
                  id="grid-last-name"
                  type="number"
                  placeholder="+234 5688383748"
                />
              </div>
            </div>
          </div>

          <div>
            <p className={`${styles.formLabel}`}>
              Emergency Contact in Home Country
            </p>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2"
                  for="grid-first-name"
                >
                  Name
                </label>
                <input
                  className={`${styles.formInput}`}
                  id="grid-first-name"
                  type="text"
                  placeholder="e.g James Michael"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-sm font-medium mb-2"
                  for="grid-last-name"
                >
                  Phone
                </label>
                <input
                  className={`${styles.formInput}`}
                  id="grid-last-name"
                  type="number"
                  placeholder="+1 235 3445344"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="">
                Transportation
              </label>
              <p className="text-xs -mt-1 mb-4 font-semibold italic">
                * Please indicate if you will need transportation on the day of
                your Arrival and Departure.{" "}
              </p>

              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="50"
                  onChange={handleChange}
                  data-category="transport"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  I will need transportation from the airport to my housing
                  accommodations on the day of my Arrival. ($50)
                </label>
              </div>

              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="50"
                  onChange={handleChange}
                  data-category="transport"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  I will need transportation from my housing accommodation to
                  the airport of the day of my Departure. ($50)
                </label>
              </div>
              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="100"
                  onChange={handleChange}
                  data-category="transport"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  For my arrival, I will need transportation for my Relative to
                  be picked up and brought to the airport to greet me, and then
                  take us both to our accommodation from the airport ($100)
                </label>
              </div>
              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value="100"
                  onChange={handleChange}
                  data-category="transport"
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  I will also need this for my Departure. The driver will pick
                  us up from our accommodation and take us to the airport. The
                  driver will wait at the airport while my Relative sees me off.
                  Then the driver will take my Relative back to the
                  accommodations. ($100)
                </label>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="">
                Security
              </label>
              <p className="text-xs -mt-1 mb-4 font-semibold italic">
                * Would you like to have a security officer to escort you for
                the day?{" "}
              </p>

              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value=""
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  No
                </label>
              </div>

              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value=""
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  Yes
                  {/* nested child starts */}
                  <div class="flex items-center mb-2">
                    <input
                      id=""
                      type="checkbox"
                      value="50"
                      onChange={handleChange}
                      data-category="security"
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="ml-2 text-md font-medium text-gray-900 "
                    >
                      Private Officer $50 daily
                    </label>
                  </div>
                  <div class="flex items-center mb-0">
                    <input
                      id=""
                      type="checkbox"
                      value="70"
                      onChange={handleChange}
                      data-category="security"
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="ml-2 text-md font-medium text-gray-900 "
                    >
                      Police Officer $70 daily
                    </label>
                  </div>
                  {/* nested child ends */}
                </label>
              </div>
              <div class="flex items-start mb-4">
                <input
                  id=""
                  type="checkbox"
                  value=""
                  className={`${styles.formCheckbox}`}
                />
                <label
                  for=""
                  class="ml-2 text-md font-medium text-gray-900 "
                >
                  Visibly Armed $50 daily surcharge (in addition to above
                  Officer Charge)
                </label>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label className={`${styles.formLabel}`} for="">
                T-SHIRTS
              </label>

              <div>
                <label
                  for=""
                  className="block tracking-wide text-gray-900 text-xs font-bold mb-2"
                >
                  Queen Tshirt $25
                </label>

                <div className="flex">
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="ml-1 mr-4 text-md font-medium text-gray-900 "
                    >
                      S
                    </label>
                  </div>

                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="ml-1 mr-4 text-md font-medium text-gray-900 "
                    >
                      M
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      L
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      XL
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      1X
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="qs"
                      onChange={handleQueenTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      2X
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label
                  for=""
                  className="block tracking-wide text-gray-900 text-xs font-bold mb-2"
                >
                  Matching King T-Shirt $25
                </label>

                <div className="flex">
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="ms"
                      onChange={handleKingTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="ml-1 mr-4 text-md font-medium text-gray-900 "
                    >
                      M
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="ms"
                      onChange={handleKingTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      L
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="ms"
                      onChange={handleKingTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      XL
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="ms"
                      onChange={handleKingTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      1X
                    </label>
                  </div>
                  <div class="flex items-center mb-4">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      data-category="ms"
                      onChange={handleKingTshirtChange}
                      className={`${styles.formCheckbox}`}
                    />
                    <label
                      for=""
                      class="1 mr-4 text-md font-medium text-gray-900 "
                    >
                      2X
                    </label>
                  </div>
                </div>

                <div class="flex flex-wrap -mx-3 mb-6">
                  <div class="w-full px-3">
                    <label className={`${styles.formLabel} capitalize`} for="">
                      Choose Title
                    </label>

                    <div class="flex items-center mb-4">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className={`${styles.formCheckbox}`}
                      />
                      <label
                        for=""
                        class="ml-2 text-md font-medium text-gray-900 "
                      >
                        The Queen has Arrived
                      </label>
                    </div>

                    <div class="flex items-center mb-4">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className={`${styles.formCheckbox}`}
                      />
                      <label
                        for=""
                        class="ml-2 text-md font-medium text-gray-900 "
                      >
                        The King has Arrived
                      </label>
                    </div>

                    <div class="flex items-center mb-4">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className={`${styles.formCheckbox}`}
                      />
                      <label
                        for=""
                        class="ml-2 text-md font-medium text-gray-900 "
                      >
                        Breaking The Spell
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id=""
                        type="checkbox"
                        value=""
                        className={`${styles.formCheckbox}`}
                      />
                      <label
                        for=""
                        class="ml-2 text-md font-medium text-gray-900 "
                      >
                        It’s In My DNA
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col -mx-3 mb-6 shadow-lg bg-stone-700/30 rounded p-4 space-y-2">
            <p className="text-[var(--yellow)] text-xl font-bold">CART</p>

            <p className="font-medium">
              Escort Services{" "}
              <span className="text-xl">$ {categoryState.escortTotal}</span>
            </p>
            <p className="font-medium">
              Transportation{" "}
              <span className="text-xl">$ {categoryState.transportTotal}</span>
            </p>
            <p className="font-medium">
              Security{" "}
              <span className="text-xl">$ {categoryState.securityTotal}</span>
            </p>
            <p className="font-medium">
              T-Shirts <span className="text-xl">$ {tshirtsTotal}</span>
            </p>
            <p className="font-medium">
              Vat/Taxes <span className="text-xl">$ 10</span>
            </p>
            <p className="font-bold">
              SUBTOTAL <span className="text-xl">$ {subTotal}</span>
            </p>
          </div>

          <div>
            <p>DISCOUNT CODE: _NEWYEAR23</p>
            <p>Discount Amount $ 25</p>

            <p className="font-bold mt-2">
              YOUR TOTAL IS :{" "}
              <span id="total" className="">
                {" "}
                $ {total}
              </span>
            </p>
          </div>

          <div className="bg-black rounded-md text-white p-3 mt-9 shadow-md opacity-90">
            <p className="mb-3">
              Payments can be sent via <br /> World Remit/Remitly/Sendwave
              /Western Union
            </p>

            <p>Roberta Toniatte Bryant</p>
            <p>
              Lekki, Lagos, Nigeria <br /> tribalgatewayllc@gmail.com <br />
              +234-913-903-0389
            </p>

            <p className="mt-3">Access Bank Acct#: 1662807523</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookEscort;
