/* 
=== Markdown Unordered List Parser ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-07

=== Input / Output ===
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

=== Function ===
An unordered list consists of one or more list items. A valid list item appears 
on its own line and:

Starts with a dash ("-"), followed by
At least one space, and then
The list item text.
The list is given as a single string with new lines separated by the newline 
character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

Note: The console may not display HTML tags in strings when logging messages. Check the 
browser console to see logs with tags included.
 */

function parseUnorderedList(markdown) {
  let split = markdown.split("\n");
  let items = [];
  
  split.forEach(item => {
    let trimmedItem = item.substring(1,item.length).trim();
    items.push(`<li>${trimmedItem}</li>`);
  });
  
  return `<ul>${items.join("")}</ul>`;
}

/*
=== Design Rationale === 
1.  The new line indicator is a clear separator between line items. This shall be used to
    split the markdown string into separate parts, which can then be conditioned to remove
    excess chars, which are:
    - The first "-" which is always present according to the markdown spec
    - White space around the string
2.  At the same time the function can wrap the conditioned string in html <li> tags.
3.  Finally the array of conditioned items can be rejoined and wrapped in <ul> tags.
*/
