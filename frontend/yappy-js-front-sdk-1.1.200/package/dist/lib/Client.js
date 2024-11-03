"use strict";var _constants=require("../constants/constants");Object.defineProperty(exports,"__esModule",{value:!0}),exports.setButton=setButton;/**
 *
 * @param element HTMLElement
 * @param callback Function to execute when element is added
 * @description Observe is YappyButton is added to the dom
 */function onAdded(a,b){const c=a.parentNode;if(!c)throw new Error("The node must already be attached");const d=new MutationObserver(c=>{for(const d of c)for(const c of d.addedNodes)//@ts-ignore
c.id===a.id&&b()});d.observe(c,{childList:!0})}/**
 *
 * @param donation true for donation , false for normal payment
 * @param formId  Your form id
 * @param buttonType The style of your button 'brand','dark'or'light' by default is brand
 * @description Creates the yappyButton
 */function createButton(a=!1,b,c){const d=document.getElementById("Yappy_Checkout_Button");let e;let f=c?c:"brand",g={brand:"yappy-logo-brand.svg",dark:"yappy-logo-dark.svg",light:"yappy-logo-light.svg",white:"yappy-logo-light.svg"}[f];g||(g="yappy-logo-light.svg"),e=`<img src="${_constants.ASSETS_URL}${g}">`;let h=a?"Donar con&nbsp;":"Pagar con&nbsp;";d.classList.add("ecommerce","yappy",f),d.innerHTML=h+e,d.addEventListener("click",function(){const a=document.getElementById(b);let c=a.ownerDocument.createElement("input");c.style.display="none",c.type="submit",c.setAttribute("id","ghostInput"),a.addEventListener("submit",a=>{a.preventDefault()}),a.appendChild(c).click(),a.removeChild(c)})}/**
 *
 * @param donation true for donation , false for normal payment
 * @param formId  Your form id
 * @param buttonType The style of your button 'brand','dark'or'light' by default is brand
 */function setButton(a=!1,b,c){document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<link id="yappyStyle" rel="stylesheet" href=${_constants.CSS_URL} />`);try{document.addEventListener("DOMContentLoaded",function(){createButton(a,b,c);const d=document.getElementById("Yappy_Checkout_Button");onAdded(d,()=>createButton(a,b,c))})}catch(a){throw new Error("Form Id not provided")}}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvQ2xpZW50LnRzIl0sIm5hbWVzIjpbIm9uQWRkZWQiLCJlbGVtZW50IiwiY2FsbGJhY2siLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwiRXJyb3IiLCJvYnMiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwibXV0YXRpb24iLCJlbCIsImFkZGVkTm9kZXMiLCJpZCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJjcmVhdGVCdXR0b24iLCJkb25hdGlvbiIsImZvcm1JZCIsImJ1dHRvblR5cGUiLCJ5YXBweUJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbWFnZSIsInRoZW1lIiwibG9nbyIsImJyYW5kIiwiZGFyayIsImxpZ2h0Iiwid2hpdGUiLCJBU1NFVFNfVVJMIiwidGV4dEJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JtIiwiYnV0dG9uIiwib3duZXJEb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0eXBlIiwic2V0QXR0cmlidXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwic2V0QnV0dG9uIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJDU1NfVVJMIiwiZXJyIl0sIm1hcHBpbmdzIjoiYUFBQSxpRCxtRkFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTQSxDQUFBQSxPQUFULENBQWlCQyxDQUFqQixDQUF1Q0MsQ0FBdkMsQ0FBMkQsQ0FDekQsS0FBTUMsQ0FBQUEsQ0FBTSxDQUFHRixDQUFPLENBQUNHLFVBQXZCLENBQ0EsR0FBSSxDQUFDRCxDQUFMLENBQWEsS0FBTSxJQUFJRSxDQUFBQSxLQUFKLENBQVUsbUNBQVYsQ0FBTixDQUViLEtBQU1DLENBQUFBLENBQUcsQ0FBRyxHQUFJQyxD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LENBQXBCLENBQ0FyQixPQUFPLENBQUNtQixDQUFELENBQWMsSUFBTUosWUFBWSxDQUFDQyxDQUFELENBQVdDLENBQVgsQ0FBbUJDLENBQW5CLENBQWhDLENBQ1IsQ0FKRCxDQUtELENBQUMsTUFBT2tDLENBQVAsQ0FBWSxDQUNaLEtBQU0sSUFBSS9DLENBQUFBLEtBQUosQ0FBVSxzQkFBVixDQUNQLENBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBU1NFVFNfVVJMLCBDU1NfVVJMIH0gZnJvbSBcIi4uL2NvbnN0YW50cy9jb25zdGFudHNcIjtcbmltcG9ydCB7IFlhcHB5QnV0dG9uVHlwZXMgfSBmcm9tIFwiLi4vdHlwZXMvY29tbW9uL21haW5cIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnQgSFRNTEVsZW1lbnRcbiAqIEBwYXJhbSBjYWxsYmFjayBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZWxlbWVudCBpcyBhZGRlZFxuICogQGRlc2NyaXB0aW9uIE9ic2VydmUgaXMgWWFwcHlCdXR0b24gaXMgYWRkZWQgdG8gdGhlIGRvbVxuICovXG5mdW5jdGlvbiBvbkFkZGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjYWxsYmFjazogRnVuY3Rpb24pIHtcbiAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICBpZiAoIXBhcmVudCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG5vZGUgbXVzdCBhbHJlYWR5IGJlIGF0dGFjaGVkXCIpO1xuXG4gIGNvbnN0IG9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgZm9yIChjb25zdCBlbCBvZiBtdXRhdGlvbi5hZGRlZE5vZGVzKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZWwuaWQgPT09IGVsZW1lbnQuaWQpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgb2JzLm9ic2VydmUocGFyZW50LCB7XG4gICAgY2hpbGRMaXN0OiB0cnVlLFxuICB9KTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGRvbmF0aW9uIHRydWUgZm9yIGRvbmF0aW9uICwgZmFsc2UgZm9yIG5vcm1hbCBwYXltZW50XG4gKiBAcGFyYW0gZm9ybUlkICBZb3VyIGZvcm0gaWRcbiAqIEBwYXJhbSBidXR0b25UeXBlIFRoZSBzdHlsZSBvZiB5b3VyIGJ1dHRvbiAnYnJhbmQnLCdkYXJrJ29yJ2xpZ2h0JyBieSBkZWZhdWx0IGlzIGJyYW5kXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlcyB0aGUgeWFwcHlCdXR0b25cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKFxuICBkb25hdGlvbjogYm9vbGVhbiA9IGZhbHNlLFxuICBmb3JtSWQ6IHN0cmluZyxcbiAgYnV0dG9uVHlwZT86IFlhcHB5QnV0dG9uVHlwZXNcbikge1xuICBjb25zdCB5YXBweUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiWWFwcHlfQ2hlY2tvdXRfQnV0dG9uXCIpITtcbiAgbGV0IGltYWdlOiBzdHJpbmc7XG5cbiAgY29uc3QgdGhlbWVzID0ge1xuICAgIGJyYW5kOiBcInlhcHB5LWxvZ28tYnJhbmQuc3ZnXCIsXG4gICAgZGFyazogXCJ5YXBweS1sb2dvLWRhcmsuc3ZnXCIsXG4gICAgbGlnaHQ6IFwieWFwcHktbG9nby1saWdodC5zdmdcIixcbiAgICB3aGl0ZTogXCJ5YXBweS1sb2dvLWxpZ2h0LnN2Z1wiLFxuICB9O1xuICBsZXQgdGhlbWUgPSBidXR0b25UeXBlID8gYnV0dG9uVHlwZSA6IFwiYnJhbmRcIjtcbiAgbGV0IGxvZ28gPSB0aGVtZXNbdGhlbWVdO1xuICBpZiAoIWxvZ28pIHtcbiAgICBsb2dvID0gXCJ5YXBweS1sb2dvLWxpZ2h0LnN2Z1wiO1xuICB9XG5cbiAgaW1hZ2UgPSBgPGltZyBzcmM9XCIke0FTU0VUU19VUkx9JHtsb2dvfVwiPmA7XG4gIGxldCB0ZXh0QnV0dG9uID0gZG9uYXRpb24gPyBcIkRvbmFyIGNvbiZuYnNwO1wiIDogXCJQYWdhciBjb24mbmJzcDtcIjtcblxuICB5YXBweUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWNvbW1lcmNlXCIsIFwieWFwcHlcIiwgdGhlbWUpO1xuICB5YXBweUJ1dHRvbi5pbm5lckhUTUwgPSB0ZXh0QnV0dG9uICsgaW1hZ2U7XG4gIHlhcHB5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKTtcbiAgICBsZXQgYnV0dG9uID0gKDxIVE1MRm9ybUVsZW1lbnQ+Zm9ybSEpLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdob3N0SW5wdXRcIik7XG4gICAgZm9ybSEuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICAgICg8SFRNTEZvcm1FbGVtZW50PmZvcm0hKS5hcHBlbmRDaGlsZChidXR0b24pLmNsaWNrKCk7XG4gICAgKDxIVE1MRm9ybUVsZW1lbnQ+Zm9ybSEpLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG4gIH0pO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGRvbmF0aW9uIHRydWUgZm9yIGRvbmF0aW9uICwgZmFsc2UgZm9yIG5vcm1hbCBwYXltZW50XG4gKiBAcGFyYW0gZm9ybUlkICBZb3VyIGZvcm0gaWRcbiAqIEBwYXJhbSBidXR0b25UeXBlIFRoZSBzdHlsZSBvZiB5b3VyIGJ1dHRvbiAnYnJhbmQnLCdkYXJrJ29yJ2xpZ2h0JyBieSBkZWZhdWx0IGlzIGJyYW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b24oXG4gIGRvbmF0aW9uOiBib29sZWFuID0gZmFsc2UsXG4gIGZvcm1JZDogc3RyaW5nLFxuICBidXR0b25UeXBlPzogWWFwcHlCdXR0b25UeXBlc1xuKSB7XG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXVxuICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXG4gICAgICBcImJlZm9yZWVuZFwiLFxuICAgICAgYDxsaW5rIGlkPVwieWFwcHlTdHlsZVwiIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPSR7Q1NTX1VSTH0gLz5gXG4gICAgKTtcblxuICB0cnkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY3JlYXRlQnV0dG9uKGRvbmF0aW9uLCBmb3JtSWQsIGJ1dHRvblR5cGUpO1xuICAgICAgY29uc3QgeWFwcHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIllhcHB5X0NoZWNrb3V0X0J1dHRvblwiKSE7XG4gICAgICBvbkFkZGVkKHlhcHB5QnV0dG9uLCAoKSA9PiBjcmVhdGVCdXR0b24oZG9uYXRpb24sIGZvcm1JZCwgYnV0dG9uVHlwZSkpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGb3JtIElkIG5vdCBwcm92aWRlZFwiKTtcbiAgfVxufVxuIl19