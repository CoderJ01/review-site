import React, { useRef } from "react";
import { useState } from "react";
import { Hint } from "react-autocomplete-hint";

const AutoComplete = ({ change }) => {
  const [text, setText] = useState("");
  const nationalParks = [
    "Acadia National Park",
    "Arches National Park",
    "Badlands National Park",
    "Big Bend National Park",
    "Biscayne National Park",
    "Black Canyon of the Gunnison National Park",
    "Bryce Canyon National Park",
    "Canyonlands National Park",
    "Capitol Reef National Park",
    "Carlsbad Caverns National Park",
    "Channel Islands National Park",
    "Congaree National Park",
    "Crater Lake National Park",
    "Cuyahoga Valley National Park",
    "Death Valley National Park",
    "Denali National Park and Preserve",
    "Dry Tortugas National Park",
    "Everglades National Park",
    "Gates of the Arctic National Park",
    "Gateway Arch National Park",
    "Glacier National Park",
    "Glacier Bay National Park",
    "Grand Canyon National Park",
    "Grand Teton National Park",
    "Great Basin National Park",
    "Great Sand Dunes National Park and Preserve",
    "Great Smoky Mountains National Park",
    "Guadalupe Mountains National Park",
    "Haleakala National Park",
    "Hawaii Volcanoes National Park",
    "Hot Springs National Park",
    "Indiana Dunes National Park",
    "Isle Royale National Park",
    "Joshua Tree National Park",
    "Katmai National Park and Preserve",
    "Kenai Fjords National Park",
    "Kings Canyon National Park",
    "Kobuk Valley National Park",
    "Lake Clark National Park",
    "Lassen Volcanic National Park",
    "Mammoth Cave National Park",
    "Mesa Verde National Park",
    "Mount Rainier National Park",
    "National Park of American Samoa",
    "New River Gorge National Park",
    "North Cascades National Park",
    "Olympic National Park",
    "Petrified Forest National Park",
    "Pinnacles National Park",
    "Redwood National Park",
    "Rocky Mountain National Park",
    "Saguaro National Park",
    "Sequoia National Park",
    "Shenandoah National Park",
    "Theodore Roosevelt National Park",
    "Virgin Islands National Park",
    "Voyageurs National Park",
    "White Sands National Park",
    "Wind Cave National Park",
    "Wrangell-St. Elias National Park and Preserve",
    "Yellowstone National Park",
    "Yosemite National Park",
    "Zion National Park",
  ];
  return (
      <Hint options={nationalParks}>
        <input className="input searchInput" placeholder="i.e. Yellowstone..." value={text} 
        onChange={(e) => {setText(e.target.value); 
          if (change) {
            change(e)}
          }
        } />
      </Hint>
  );
};
export default AutoComplete;
