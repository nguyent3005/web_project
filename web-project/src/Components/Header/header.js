import style from "./header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.nav_bar}>
        <div className={style.logo}>
          <h1>NT Shop</h1>
        </div>
        <div className={style.search_box}>
          <form className={style.search_form} action="#" method="get">
            <input
              type="text"
              name="search"
              placeholder="Tìm kiếm sản phẩm..."
              required
              className={style.search_input}
            />
            <button type="submit" className={style.search_button}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
                alt="search icon"
              />
            </button>
          </form>
        </div>

        <div className={style.infor}>
          <div className={style.account_box}>
            <div className={style.account_icon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
                alt="user icon"
              />
            </div>
            <div className={style.account_info}>
              <a href="#" className={style.login_link}>
                Đăng nhập / Đăng ký
              </a>
              <div className={style.dropdown}>
                <span>Tài khoản của tôi</span>
                <span className={style.arrow}>▼</span>
              </div>
            </div>
          </div>
          <div className={style.cart_box}>
            <div className={style.cart_icon}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
                alt="cart icon"
              />
              <span className={style.cart_badge}>0</span>
            </div>
            <div className={style.cart_info}>
              <span>Giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
