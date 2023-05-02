[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/wH3jFylN)
# hw4-using-react
This is the starter code of [2023-Programming User Interface Homework](https://hackmd.io/@akairisu/ByGFeGdZh)

### 姓名：陳允玟
### 你 deploy 的網站連結：https://darling-granita-9a80c8.netlify.app/

### 你所實作的加分作業項目，以及如何觸發它
無

### 在前述可任意實作的情況下，你設計的行為，e.g.當使用者離開產品詳細資訊頁面又回來時、當使用者關閉網頁又重開時、當使用者開啟複數網頁時等等
在App.js中建一個class，並在裡面建立購物車所需變數：
```{js}
this.state={
  total_quantity: 0,    // 總數量
  subtotal_price: 0,    // 總價格
  cart: []              // 購物車內的物品
}

// 並且有三個function

// 新增至購物車，用於 Details Page
add_to_cart(index, cur_color, quantity, size)    
// 更新購物車內物品數量，用於 Shopping Cart Page
change_cart_obj(cart_idx, new_quantity)
// 刪除購物車內物品數量，用於 Shopping Cart Page
delete_cart_obj(cart_idx)
```

```{js}
// cart 中物品結構
let product = {
  "index": index,
  "color": cur_color,
  "quantity": quantity,
  "size": size
}
```
並且將變數及function傳入各個page，在各個page中所做的更動都會利用function更新state。
故當**使用者在不同頁面中跳轉**時，並不會改變所儲存的值(因為是存在`App.js`)。但若是當使用者**重新整理網頁、關閉網頁又重開、開啟複數網頁時**等等，都**不會**儲存先前的購物車資訊。


### 重要：請討論使用 React 實作與作業一中使用純 html/css/JavaScript 實作有何不同。哪一個比較方便與為什麼？哪一個比較容易理解如何操作與為什麼？哪一個在實作同一個頁面時需要撰寫更多程式碼？
- 我認為使用React比較方便，因為像是在Navbar、Footer部分只要開一個`Navbar.js`中寫一次，之後在`App.js`中import後，就可以在各頁面中跳轉時都保持Navbar和Footer在頁面中。而且在使用重複性的結構時，如產品頁面中的多件商品，可以直接使用`Array.map()`及變數撰寫Html結構，就不用像之前要在js中找到Id再改變其中的html(而且在js中寫html字串比較難以閱讀)。我也覺得在react中使用`<Container><Row><Col>`讓排版變得容易許多，也較好處理當螢幕寬度改變的狀況。
- 在理解與操作上也是認為使用React比較容易，雖然我剛開始要理解react時花了蠻多時間，因為有太多功能可以使用，但嘗試使用後逐漸找到了一些使用的技巧，就覺得還蠻方便的，且code更加具有結構性，也更容易閱讀，了解其中的邏輯。但就是目前還不夠熟悉，所以在這次作業中應該還有不少的部分是沒有找到較好的替代方式撰寫，就會使用以前作業的邏輯達成該功能，希望之後能夠越來越上手。
- 相較於作業一，這次作業在實作頁面時使用React能夠減少不少程式碼，因為將js和html寫在一起的關係，且能夠將相同的結構(如Navbar和Footer)當作物件來import並使用，故減少了很多要重複撰寫相同code的狀況。


### 其他你所實作的網站的有趣之處
缺失品項名稱的話，名稱會改為顯示"Not Found :("。
若商品完全沒有任何一個顏色可供選則(Available in 0 color)，在商品頁面就直接不會顯示該品項的存在。如：
```{js}
...
"colors": {
        
},
...
```