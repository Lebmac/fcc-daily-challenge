/* 
=== Markdown Link Parser ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-14

=== Input / Output / Function ===
Given the string of a link in Markdown, return the equivalent HTML string.
- A Markdown image has the following format: "[link_text](link_url)". 
- Return the string of the HTML a tag with the href set to the link_url 
  and the link_text as the tag content.
- For example, 
  given "[freeCodeCamp](https://freecodecamp.org/)" 
  return '<a href="https://freecodecamp.org/">freeCodeCamp</a>';

Note: The console may not display HTML tags in strings when logging 
messages — check the browser console to see logs with tags included. */

function parseLink(markdown) {
  let str = markdown.substring(1, markdown.length - 1);
  let arr = str.split("](");
  return `<a href="${arr[1]}">${arr[0]}</a>`;
}

/* 
=== Design Rationale === 
1.  the markdown format requires the function to identify and extract two components
    between known characters like "(", ")" ,"[" ,"]".
2.  The provided string never has white space to trim. However this function could be
    hardented by adding a trim() function to account for this possibility
3.  The string therefore always starts with [ and ends with )
    The caller doesn't need these so we can extract the sub string between char 0 and 
    markdown.length
4.  Finally the function needs to identify the link and text as separate components.
    The pattern of "](" consistently occurs between the link and text, so the split
    operation ensures the required elements are separated and unaltered.
5.  Returning the html is a case of wrapping the extracted elements with anchor tags.
    Building the output as a template literal allows for easy insertion of the
    markdown components and does not require escape characters to manage quotemarks,
    therefore it is the ideal output contruction method.
*/
