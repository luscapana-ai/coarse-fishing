
export type Category = 'Fish Species' | 'Rigs & Knots' | 'Bait Library' | 'Watercraft' | 'Guides & Care';

export interface StaticArticle {
  id: string;
  title: string;
  category: Category;
  summary: string;
  content: string;
}

export const STATIC_ARTICLES: StaticArticle[] = [
  // --- GUIDES & CARE ---
  {
    id: 'guide-legal',
    title: 'Legal Requirements (UK)',
    category: 'Guides & Care',
    summary: 'Rod licences, fishery permits, and the close season rules for 2026.',
    content: `## Legal Requirements & Permissions

Before you start coarse fishing in the UK, you must ensure you have the proper documentation.

### Rod Licence
Anyone aged **13 or over** must have a valid Environment Agency rod licence to fish in rivers, canals, and lakes in England and Wales.
- **Adults**: Required.
- **Juniors (13-16)**: Licences are free but **still required**.
- **Under 13s**: No licence required.
You can purchase these online at GOV.UK.

### Fishery Permits
A rod licence is **not** a "permit to fish anywhere." You usually need a separate:
- **Day Ticket**: Purchased from the fishery or on the bank.
- **Club Membership**: For access to private club waters.
Always check with the landowner or angling club before fishing.

### Close Season
A legal closed season exists on all **rivers, streams, and drains** from **15th March to 15th June** inclusive. This is to protect spawning fish.
*Note: Most stillwaters (lakes, ponds) and many canals remain open year-round, but check local bylaws.*`
  },
  {
    id: 'guide-equipment',
    title: 'Comprehensive Tackle Guide',
    category: 'Guides & Care',
    summary: 'Detailed breakdown of rods, reels, terminal tackle, and accessories for 2026.',
    content: `## Tackle Guide (2026 Standards)

For 2026, coarse fishing tackle in the UK is categorized into rods/reels, terminal tackle, and fish care equipment. Beginners can find comprehensive starter kits priced between **£50 and £135**.

### 1. Primary Rods & Reels
The choice depends on the specific technique used:
- **Float Rods**: 10–13ft rods with a "fast" action for rapid hook sets.
- **Feeder/Quiver Tip Rods**: Designed with sensitive, interchangeable tips (e.g., 1oz to 3oz) to detect bites on the bottom.
- **Whips & Poles**: Telescopic or sectioned rods without reels, ideal for short-range fishing.
- **Fixed Spool Reels**: The standard for most coarse fishing; **2500–4000** sizes are typical.

### 2. Terminal Tackle
Items attached to the end of the fishing line:
- **Line**: Monofilament is the standard for its stretch. Use **3–4lb** for small fish or **8–10lb** for larger carp.
- **Hooks**: Sizes **10–18** are common. Most UK fisheries require **barbless** hooks.
- **Floats**: Wagglers for stillwater and stick floats for rivers.
- **Weights**: Split shot for balancing floats and ledger weights or feeders for bottom fishing.
- **Plummet**: A specialized weight used to accurately measure water depth.

### 3. Essential Fish Care & Safety
UK fisheries strictly enforce fish welfare standards:
- **Landing Net**: **Micro-mesh** nets are required to safely lift fish from the water.
- **Unhooking Mat or Cradle**: A padded, wet surface to protect the fish's slime and scales while on the bank.
- **Disgorger**: **Mandatory**. A tool used to safely and quickly remove hooks from the fish's mouth.
- **Antiseptic Spray**: Used to treat hook marks or small wounds on the fish.

### 4. Accessories & Luggage
- **Seat Box or Chair**: For comfort during long sessions. 2026 models like the *Daiwa Slide Tray Feeder Chair* offer modular accessory mounts.
- **Bank Sticks & Rod Rests**: To hold rods securely in position.
- **Bait Boxes & Buckets**: For storing live baits like maggots or mixing groundbait.
- **Tackle Box**: To organize small terminal items like hooks, swivels, and beads.`
  },
  {
    id: 'guide-care',
    title: 'Fish Care Best Practices',
    category: 'Guides & Care',
    summary: 'Comprehensive guide to handling, treating, and releasing fish safely.',
    content: `## Fish Care & Safety

The welfare of the fish is paramount. Modern angling is about preservation.

### Handling Basics
- **Wet Hands**: **Always** wet your hands before touching a fish. Dry hands strip the protective slime coat, leaving the fish vulnerable to infection.
- **Equipment**: Use a large, padded unhooking mat or cradle. Ensure it is wet/damp before placing the fish on it.
- **Quick Release**: Keep the fish out of water for the shortest time possible. Have your camera and scales ready *before* you lift the fish out of the net.

### Treating Wounds
- **Clinic/Antiseptic**: Carry a carp care kit (e.g., Korda Carp Care or Propolis). Dab onto hook holds, lifted scales, or sores to prevent infection.
- **Deep Hooking**: If a fish is deep-hooked and you cannot safely remove it, cut the line as close to the hook as possible. The hook will often rust out or be shed. Do not pull aggressively.

### Recovery (The Release)
- **Support**: Hold the fish upright in the water until it supports its own weight and kicks.
- **Flow**: On rivers, point the fish's nose upstream into the current to oxygenate its gills.
- **Patience**: Large fish (especially Barbel and Pike) build up lactic acid during the fight. They may need 5-10 minutes of support before they are strong enough to swim away. **Never** just throw a fish back.

### Environment
- **No Litter**: Discarded fishing line is lethal to birds and wildlife. Always take your rubbish home.
- **Bankside**: Respect the vegetation and wildlife. Close gates behind you.`
  },
  {
    id: 'guide-safety',
    title: 'Angler Safety & Hygiene',
    category: 'Guides & Care',
    summary: 'Staying safe on the bank: Power lines, Weil’s disease, and wading.',
    content: `## Safety First

Fishing takes place in natural environments that present specific hazards.

### Power Lines
**Look Up!** Carbon fiber rods are highly conductive. Never fish within 30 meters of overhead power lines. Electricity can arc; you don't need to touch the wire to be electrocuted.

### Weil’s Disease (Leptospirosis)
A serious bacterial infection carried by rats found in riverbanks and lakes.
- **Transmission**: Contaminated water entering cuts or via mouth/eyes.
- **Prevention**: Cover cuts with waterproof plasters. Use hand sanitizer before eating or smoking. Wash hands after handling fish or equipment.
- **Symptoms**: Flu-like symptoms (fever, headache). If you get ill after fishing, tell your doctor you are an angler.

### Wading & Water Safety
- **Unknown Depths**: Never wade in water if you don't know the depth.
- **Silt**: Be wary of soft silt/mud; it can act like quicksand.
- **Life Jackets**: Recommended when boat fishing or wading in fast currents.`
  },
  {
    id: 'guide-etiquette',
    title: 'Bankside Etiquette',
    category: 'Guides & Care',
    summary: 'Unwritten rules for respecting other anglers and the environment.',
    content: `## The Code of Conduct

### Personal Space
- **Swim Distances**: Do not set up too close to another angler. On rivers, leave at least one "swim" (fishing spot) gap if possible.
- **Casting Lanes**: Imagine the water is divided in front of you. Do not cast across another angler's line or into their water.

### Noise & Light
- **Sound**: Fish can sense vibration. Walk softly. Keep voices down. Turn your bite alarms volume to the minimum needed.
- **Lights**: At night, avoid shining headtorches directly at other anglers or across the water. Use a red light setting if available to preserve night vision and not spook fish.

### Respecting Wildlife
- **Swans & Birds**: Be patient if birds swim through your line. Sink your rod tip to let them pass.
- **Canals**: Give way to boats. Lift your rod tip or sink your line depending on the boat's draft.`
  },
  {
    id: 'guide-clothing',
    title: 'Clothing & Footwear',
    category: 'Guides & Care',
    summary: 'Staying comfortable and safe in all weathers.',
    content: `## Essential Clothing

Comfortable anglers fish better and for longer.

### Layering System
- **Base Layer**: Moisture-wicking thermals (merino wool is best).
- **Mid Layer**: Fleece or hoodie for insulation.
- **Outer Shell**: Waterproof and windproof jacket (Gore-Tex or similar).

### Footwear
- **Boots**: Hiking boots provide ankle support on uneven banks.
- **Wellies**: Essential for muddy conditions or wading margins. Neoprene-lined wellies are warmer in winter.

### Polarised Sunglasses
Not just for fashion!
- **Safety**: Protects your eyes from flying hooks or weights.
- **Fish Spotting**: Cuts surface glare, allowing you to see fish and underwater features. Amber lenses are best for low light; grey for bright sun.`
  },
  {
    id: 'guide-shipping',
    title: 'Shipping Live Bait',
    category: 'Guides & Care',
    summary: 'Guidelines for transporting and shipping live creatures.',
    content: `## Shipping Live Creatures

If you are buying or selling live bait (insects, worms) on the marketplace, strict standards apply to ensure survival.

### Key Requirements
- **Carrier Selection**: Use overnight or 2-day services (e.g., FedEx Priority/Standard Overnight or UPS Next Day Air).
- **Timing**: Ship on **Mondays, Tuesdays, or Wednesdays** to avoid weekend delays where packages sit in depots.
- **Temperature Control**: Use heat or cold packs based on the weather. Avoid shipping if temps are below 35°F (1.6°C) or above 95°F (35°C).
- **Labeling**: Boxes must be clearly labeled "**LIVE ANIMALS**" and "**THIS WAY UP**".

### Species Guidelines
- **Insects & Worms**: Use ventilated, escape-proof plastic jars/tubs packed in a sturdy box with insulating material (min 1/2 inch foam).
- **Fish**: Must be double-bagged in strong plastic (min 4 mils), filled 1/3 with water and 2/3 with oxygen, inside an insulated container.
- **Prohibited**: Do not ship venomous or dangerous animals.`
  },

  // --- FISH SPECIES ---
  {
    id: 'species-carp',
    title: 'Common Carp',
    category: 'Fish Species',
    summary: 'The most popular freshwater sport fish in the UK.',
    content: `## Common Carp (*Cyprinus carpio*)

### Identification & Overview
The Common Carp is the powerhouse of coarse fishing. Characterized by a robust, fully scaled bronze/gold body, a down-turned mouth with four barbels, and a long dorsal fin. They can grow to enormous sizes, with UK records exceeding 60lb.

### Habitat & Location
Carp thrive in stillwaters (lakes, ponds, gravel pits) and slow-moving rivers.
- **Summer**: Look for them in the margins, near lily pads, or cruising on the surface.
- **Winter**: They tend to shoal up in deeper water or snaggy areas protected from cold winds.
- **Features**: Islands, overhanging trees, and gravel bars are classic patrol routes.

### Feeding Habits
Carp are omnivorous bottom feeders. They root around in the silt for bloodworms, snails, and crayfish. They feed most aggressively in low light conditions (dawn/dusk) and overnight.

### Best Baits
- **Boilies**: High nutritional value, selective for larger fish.
- **Pellets**: Excellent for feeding spots to attract shoals.
- **Corn/Maize**: A visual classic that rarely fails.
- **Maggots**: Great in winter when fish are lethargic.

### Rigging & Tackle
- **Rod**: 2.75lb - 3.5lb Test Curve.
- **Line**: 12lb - 15lb mono is standard.
- **Rigs**: Hair Rig (essential), Chod Rig (for silt/weed), Ronnie Rig (pop-ups).`
  },
  {
    id: 'species-crucian',
    title: 'Crucian Carp',
    category: 'Fish Species',
    summary: 'A golden treasure of traditional farm ponds and estate lakes.',
    content: `## Crucian Carp (*Carassius carassius*)

### Identification & Overview
Often confused with F1s or Brown Goldfish, the true Crucian is deeper bodied, has a more rounded back, and critically, has **no barbels** around the mouth. They are a rich buttery gold colour with rounded fins.

### Habitat & Location
They love established, weedy ponds and estate lakes. They are rarely found in fast flowing rivers.
- **Features**: Lily pads are a magnet for Crucians. They hug the marginal shelf.

### Best Baits
- **Soft Pellets**: 4mm or 6mm expander pellets are supreme.
- **Casters**: A traditional favourite.
- **Corn**: Use the skin of the corn for a lighter bait.

### Tactics
Crucians are notoriously finicky feeders.
- **The Lift Method**: A sensitive float set slightly overdepth. When the fish lifts the bait, the float rises (lifts) out of the water.
- **Tackle**: Light lines (3lb-4lb) and small fine-wire hooks (Size 18-16).`
  },
  {
    id: 'species-tench',
    title: 'Tench',
    category: 'Fish Species',
    summary: 'The Doctor Fish, famous for its olive green skin and red eyes.',
    content: `## Tench (*Tinca tinca*)

### Identification & Overview
Known as the "Doctor Fish", Tench are instantly recognizable by their olive-green skin, tiny scales, immense slime coat, and teddy-bear red eyes. Males have large, spoon-shaped pelvic fins.

### Habitat & Location
Tench love weedy lakes, gravel pits, and canals.
- **Location**: Look for beds of lily pads, weed margins, and drop-offs close to the bank.
- **Bubbling**: Tench are famous for "pin-prick" bubbles that appear in clusters as they sift through silt.

### Best Baits
- **Sweetcorn**: The number one tench bait.
- **Worms**: Dendrobaenas or lobworms are irresistible.
- **Casters**: The "crunch" of a caster shell mimics tiny snails.
- **Green Lipped Mussel**: A flavor profile Tench adore.

### Seasonal Strategies
- **Spring**: The prime time. Tench wake up hungry in April/May.
- **Summer**: Early mornings are essential.
- **Winter**: They become very dormant and are rarely caught.`
  },
  {
    id: 'species-bream',
    title: 'Common Bream',
    category: 'Fish Species',
    summary: 'The slab-sided shoaling fish that dominates reservoirs and rivers.',
    content: `## Common Bream (*Abramis brama*)

### Identification & Overview
Adult Bream ("Slabs") are deep-bodied, slimy, and dark bronze in colour. Younger fish ("Skimmers") are silver. They have a long anal fin and a forked tail.

### Feeding Habits
Bream are bottom feeders that travel in large shoals. When they feed, they stir up the bottom, often colouring the water.
- **Patrol Routes**: They follow wind lanes on large reservoirs.

### Best Baits
- **Groundbait**: Essential to hold the shoal. Sweet mixes with fishmeal work well.
- **Worms & Corn**: A "cocktail" of worm and corn is a classic hookbait.
- **Maggots**: Dead maggots are better than live ones to avoid small fish interaction.

### Rigging & Tackle
- **Feeder Fishing**: The cage feeder or method feeder is the most effective way to deliver bait accurately to the shoal.
- **Bite Indication**: Bream often give "drop-back" bites where the tip straightens out as they lift the feeder.`
  },
  {
    id: 'species-roach',
    title: 'Roach',
    category: 'Fish Species',
    summary: 'The staple of silverfish angling, distinct for its silver body and red fins.',
    content: `## Roach (*Rutilus rutilus*)

### Identification & Overview
The Roach is the most common fish in UK waters. It has bright silver-blue scales and blood-red fins.
- **Differentiation**: Often confused with Rudd. Roach have a down-turned mouth (bottom feeder) and the dorsal fin aligns directly with the pelvic fins.

### Habitat & Location
Found in almost every river, canal, and lake.
- **Rivers**: They love steady, even flows (glides) over gravel.
- **Lakes**: Look for shelf drop-offs where the depth changes.

### Best Baits
- **Hemp & Tares**: The classic summer river bait for specimen Roach.
- **Casters**: The crunchy shell selects for larger fish.
- **Bread Flake**: Deadly in winter on rivers.
- **Maggots**: The universal catcher.

### Seasonal Strategies
- **Winter**: Roach feed well in the cold. Use liquidised bread in a cage feeder.
- **Summer**: Fish shallow with a waggler or pole.`
  },
  {
    id: 'species-rudd',
    title: 'Rudd',
    category: 'Fish Species',
    summary: 'The golden jewel of the surface layers.',
    content: `## Rudd (*Scardinius erythrophthalmus*)

### Identification & Overview
Rudd look similar to Roach but have **golden** scales and an **upturned mouth**. Their dorsal fin is set noticeably further back than the pelvic fins.

### Feeding Habits
The upturned mouth indicates they are surface feeders. They patrol the upper layers eating insects and flies.

### Best Baits
- **Floating Bread**: Crust or flake fished on the surface.
- **Casters**: Fished "on the drop" (sinking slowly).
- **Sweetcorn**: Highly visible sinking bait.

### Tactics
- **Stealth**: Rudd are spooky. Keep back from the edge.
- **Waggler**: Use a crystal waggler with no shot down the line to let the bait fall naturally.`
  },
  {
    id: 'species-perch',
    title: 'Perch',
    category: 'Fish Species',
    summary: 'The stripey sergeant of the waterways.',
    content: `## Perch (*Perca fluviatilis*)

### Identification & Overview
Impossible to mistake. Olive green body, black vertical stripes ("Sergeant stripes"), vivid orange/red pelvic fins, and a spiky dorsal fin used for defence.

### Habitat & Location
Perch love **structure**.
- **Canals**: Lock gates, piling, bridges, and moored boats.
- **Rivers**: Undercut banks and deep holes.
- **Light**: They hate bright light. Fish shady spots during the day.

### Best Baits
- **Lobworms**: A whole lobworm is the ultimate Perch bait.
- **Prawns**: Raw or cooked prawns are deadly for big commercial perch.
- **Lures**: Small spinners, jigs, and dropshot lures.

### Tactics
- **Dropshotting**: excellent for searching canals without snagging.
- **Float Fishing**: A large buoyant float suspending a worm just off the bottom.`
  },
  {
    id: 'species-chub',
    title: 'Chub',
    category: 'Fish Species',
    summary: 'The greedy, wide-mouthed river specialist.',
    content: `## Chub (*Squalius cephalus*)

### Identification & Overview
A thick, brassy-sided fish with a large white mouth and black-edged scales (netting pattern). They are powerful fighters that lunge for snags.

### Habitat & Location
Exclusively river fish (though found in some stillwaters).
- **The "Chub Bush"**: They love overhanging willows and tree roots.
- **Weirs**: Often found in the turbulent water of weir pools.

### Best Baits
- **Bread**: Flake or floating crust.
- **Cheese Paste**: Strong smelling, ideal for winter.
- **Slugs**: A black slug freelined downstream is a summer classic.
- **Steak**: Raw mince or steak works for big specimens.

### Tactics
- **Roving**: Don't sit in one spot. Move from swim to swim ("stalking").
- **Freelining**: Use just a hook and line (no weight) to drift a bait naturally under a tree.`
  },
  {
    id: 'species-barbel',
    title: 'Barbel',
    category: 'Fish Species',
    summary: 'The Prince of the River – powerful, streamlined, and hard fighting.',
    content: `## Barbel (*Barbus barbus*)

### Identification & Overview
Designed for the flow. Torpedo-shaped body, golden-bronze colour, white belly, and four sensory barbels (whiskers) around a down-turned mouth.

### Habitat & Location
They need **clean, flowing water** with high oxygen content.
- **Gravel Runs**: Fast, shallow water over clean gravel.
- **Weir Pools**: The highly oxygenated water attracts them.

### Best Baits
- **Halibut Pellets**: High oil content attracts them from downstream.
- **Luncheon Meat**: Spicy sausage or Spam.
- **Boilies**: Fishmeal based boilies wrapped in paste.
- **Hemp**: Lay a carpet of hemp to hold them in the swim.

### Tactics
- **Ledgering**: Heavy leads (2oz-4oz) are needed to hold the bottom in the current.
- **Pinning Down**: Use backleads to keep your line flat so the fish don't spook.`
  },
  {
    id: 'species-pike',
    title: 'Northern Pike',
    category: 'Fish Species',
    summary: 'The freshwater shark. The apex predator of UK waters.',
    content: `## Northern Pike (*Esox lucius*)

### Identification & Overview
A prehistoric ambush predator. Long, mottled green torpedo body, duck-billed snout filled with backward-pointing razor-sharp teeth. UK record exceeds 46lb.

### Habitat & Location
Found in rivers, lakes, drains, and canals.
- **Ambush Points**: They sit motionless in weed beds or near structures waiting for prey to pass.
- **Slack Water**: In rivers, they avoid the main flow, sitting in marginal slacks.

### Feeding Habits
Pike eat Roach, Perch, Trout, Frogs, and even Water Voles. They feed aggressively in Autumn to pack on weight for winter.

### Best Baits
- **Deadbaits (Sea)**: Mackerel (oily), Smelt (cucumber scent), Sardine (soft).
- **Deadbaits (Coarse)**: Roach or Lamprey.
- **Lures**: Large spinners, plugs, swimbait, and spoons.

### Essential Safety Rules
1. **Wire Trace**: You **must** use a wire trace (minimum 20lb, 18 inches). Mono line will be cut instantly.
2. **Long Forceps**: Essential for unhooking safely. Keep your fingers away from the teeth (rakers).
3. **Unhooking Mat**: Pike are delicate despite their looks. Protect their slime coat.`
  },
  {
    id: 'species-grayling',
    title: 'Grayling',
    category: 'Fish Species',
    summary: 'The "Lady of the Stream", known for its spectacular dorsal fin.',
    content: `## Grayling (*Thymallus thymallus*)

### Identification & Overview
A member of the Salmon family. Silver-blue scales, a smell of fresh thyme, and a huge, colourful dorsal fin. The pupil is pear-shaped.

### Habitat & Location
Clean, chalk streams and upper river reaches. They tolerate colder water than most coarse fish.

### Best Baits
- **Maggots**: Red maggots are the standard.
- **Corn**: Very effective in clearer water.
- **Fly**: Grayling are a popular fly-fishing target in winter.

### Tactics
- **Trotting**: Using a stick float or loafer float to run the bait downstream at the speed of the current.
- **Winter Sport**: Grayling feed hard in freezing conditions when other fish stop.`
  },

  // --- RIGS & KNOTS ---
  {
    id: 'material-lines',
    title: 'Line & Hooklink Materials',
    category: 'Rigs & Knots',
    summary: 'Understanding Monofilament, Fluorocarbon, Braid, and Coated Braid.',
    content: `## Line & Hooklink Materials

Choosing the right material for your mainline and hooklink is critical for presentation.

### Monofilament (Mono)
The standard nylon fishing line.
- **Pros**: Cheap, excellent knot strength, has stretch (cushions the fight), sinks reasonably well.
- **Cons**: Can deteriorate in UV light, lower abrasion resistance than fluoro.
- **Best For**: General mainline, float fishing, and surface fishing (greased).

### Fluorocarbon
A dense material that has the same light refractive index as water.
- **Pros**: Invisible underwater, sinks very heavily (pins rig down), very stiff (prevents tangles).
- **Cons**: Expensive, brittle if knotted poorly (must use Grinner or Palomar), low shock strength.
- **Best For**: Stiff booms (Ronnie/Hinge rigs) and hooklinks in clear water.

### Braid
Woven fibers with zero stretch.
- **Pros**: Incredible strength-to-diameter ratio, zero stretch (ultimate bite indication), soft and supple.
- **Cons**: Highly visible, floats (unless weighted), no cushion during the fight (hook pulls risk).
- **Best For**: Spodding, Marker float work, and fishing in heavy weed (cuts through stems).

### Coated Braid
A braided core with a stiff plastic outer coating.
- **Versatility**: You can strip back the coating near the hook to create a hinge.
- **Mechanics**: The stiff section kicks the bait away from the lead (anti-tangle), while the soft section allows the hook to turn naturally.`
  },
  {
    id: 'material-leads',
    title: 'Lead Systems & Safety',
    category: 'Rigs & Knots',
    summary: 'Lead clips, Inline leads, and the importance of fish safety.',
    content: `## Lead Systems

The way your lead attaches to the line dictates the hooking mechanics and fish safety.

### Lead Clips (Safety Clips)
A plastic clip that holds the swivel and the lead.
- **Function**: If the lead gets snagged in rocks or weed, the rubber tail rubber slides off, ejecting the lead but saving the fish and the rest of the rig.
- **Bolt Effect**: The swivel is locked into the clip, so the fish hits the full weight of the lead instantly.

### Inline Leads
The mainline passes directly through the center of the lead.
- **Pros**: The most direct "bolt" effect possible. The fish cannot shake the lead as easily. Excellent for hard bottoms (gravel/clay).
- **Cons**: Can sink into silt, pulling the hooklink with it.

### Helicopter / Heli-Safe
The hooklink rotates on the line *above* the lead.
- **Drop-off**: Systems like the Korda Heli-Safe allow the lead to drop off on the strike, which is essential when fishing in very heavy weed to bring the fish to the surface.

### Backleads
Small weights clipped onto the mainline near the rod tip or 5 yards out.
- **Purpose**: They pin the mainline flat to the lake bed, preventing fish from swimming into the line and spooking.`
  },
  {
    id: 'material-pva',
    title: 'PVA Tactics',
    category: 'Rigs & Knots',
    summary: 'Using Polyvinyl Alcohol products to deliver bait with surgical precision.',
    content: `## PVA Tactics

PVA dissolves in water. It allows you to wrap bait around your hook, ensuring perfectly presented traps.

### Solid PVA Bags
A complete bag filled with pellets, powders, and the entire rig (lead and hook).
- **Advantages**: 
  1. **Tangle Free**: The hook is protected inside the bag during the cast.
  2. **Weed**: You can cast into thick weed; the bag melts, leaving your rig sitting perfectly on a pile of food on top of the weed.
  3. **Attraction**: Creates a condensed pile of food right around the hookbait.

### PVA Mesh
A woven tube used to create small "sticks" or bags of bait.
- **Stick Mix**: Compressed groundbait/pellet stick threaded onto the hooklink. It masks the hook point and ensures the hooklink lays flat.
- **Stringers**: Threading 3-4 boilies onto PVA tape to feed a small amount around the hook.

### Tips
- **Oil Friendly**: PVA doesn't dissolve in oil. You can coat your bag in salmon oil or hemp oil to make it melt slower in deep water.
- **Dry Hands**: Always dry your hands before handling PVA!`
  },
  {
    id: 'rig-extras',
    title: 'Rig Components & Extras',
    category: 'Rigs & Knots',
    summary: 'The small components that make a big difference: Shrink Tube, Micro Rings, and Sleeves.',
    content: `## Rig Components (The Extras)

Fine-tuning your rig with these extras can dramatically increase catch rates.

### Shrink Tube / Kickers
Small rubber or plastic tubes that slide over the eye of the hook.
- **Function**: They extend the shank of the hook and create an aggressive angle. This helps the hook "flip" and grab the bottom lip faster.

### Anti-Tangle Sleeves
Conical rubber sleeves that fit over the swivel and push the hooklink away from the lead.
- **Function**: Acts like a boom, forcing the rig to straighten out upon landing on the lake bed. Essential for casting soft braided hooklinks.

### Micro Rig Rings & Screws
- **Rig Rings**: Slide on the hook shank (blowback rig). Allows the bait to move naturally without the weight of the hook.
- **Bait Screws**: Plastic or metal screws that twist into a boilie or pop-up. Allows for changing hookbaits in seconds without a baiting needle.

### Buffer Beads
Rubber beads that sit between a running lead/feeder and the swivel.
- **Function**: Protects the knot from the heavy lead smashing into it during the cast and fight.

### Putty
Tungsten putty is moldable and very heavy.
- **Usage**: Mould a small piece onto your hooklink to pin it down or to counter-balance a pop-up boilie so it sinks slowly.`
  },
  {
    id: 'rig-running',
    title: 'Running Ledger Rig',
    category: 'Rigs & Knots',
    summary: 'The most sensitive and fish-safe bottom fishing setup.',
    content: `## Running Ledger Rig

### Concept & Mechanics
The mainline passes freely through the eye of the lead (or a run ring). When a fish picks up the bait, it feels minimal resistance because it isn't pulling against the weight of the lead immediately.
**Why it works**: It provides excellent bite indication, as every movement is transferred straight to the rod tip. It is also the safest rig; if the line snaps, the lead falls free.

### Component List
- Run Ring or Large Swivel
- Buffer Bead (to protect the knot)
- Swivel (Size 8)
- Hooklink (Mono or Braid)

### Step-by-Step Construction
1. Thread the Run Ring (with lead attached) onto your main line.
2. Thread on the Buffer Bead.
3. Tie your main line to one end of the Size 8 Swivel using a Palomar Knot.
4. Pull the Buffer Bead down over the Swivel eye to tidy it up.
5. Tie your Hooklink to the other end of the Swivel.`
  },
  {
    id: 'rig-helicopter',
    title: 'Helicopter Rig',
    category: 'Rigs & Knots',
    summary: 'The ultimate anti-tangle rig for distance casting and silt.',
    content: `## Helicopter Rig

### Concept & Mechanics
The hooklink rotates around the mainline (like a helicopter blade) above the lead. The lead is at the very end of the line.
**Why it works**:
1. **Aerodynamics**: The hooklink flies behind the lead, preventing tangles on long casts.
2. **Silt**: You can adjust the top bead up the line. If the lead sinks 6 inches into the silt, your hooklink sits safely on top of the mud, not buried in it.

### Safety Warning
The top bead **must** be able to slide off under low pressure so the fish is not tethered to the lead if the line breaks.

### Component List
- Leadcore leader or heavy tubing
- 2 x Rubber Beads
- Size 8 Ring Swivel (for the hooklink)
- Lead (attached to the end)`
  },
  {
    id: 'rig-waggler',
    title: 'Waggler Float Setup',
    category: 'Rigs & Knots',
    summary: 'The classic method for presenting bait in the upper layers or on the bottom.',
    content: `## Waggler Float Setup

### Concept & Mechanics
A float attached only at the bottom end. It is designed to be cast like a missile, pulling the line behind it.
**Why it works**: It allows you to fish at range on stillwaters. By burying the line underwater (sinking the rod tip), you prevent the wind moving your bait.

### Shotting Patterns
1. **Bulk Shot**: 80% of the weight (locking shot) is placed around the base of the float. This casts well and gets the bait down fast.
2. **Shirt Button**: Shot is spaced out equally down the line. This allows the bait to fall naturally through the water, catching fish "on the drop".

### Step-by-Step Construction
1. Thread the float onto the line using a float adaptor.
2. Place large split shot (AAA or BB) either side of the float loop to lock it in place.
3. Add smaller shot (No. 4 or No. 6) down the line to balance the float so only the tip shows.`
  },
  {
    id: 'rig-ronnie',
    title: 'The Ronnie Rig (Spinner)',
    category: 'Rigs & Knots',
    summary: 'The modern favourite for fishing pop-up boilies low to the lakebed.',
    content: `## The Ronnie Rig

### Concept & Mechanics
A low-lying pop-up rig that offers incredible hook rotation. The hook is attached to a "Spinner Swivel" which allows 360-degree movement.
**Why it works**: Because the hook can spin freely, it grabs hold in the fish's mouth from any angle of approach.

### Component List
- Curve Shank Hook (Size 4 or 6)
- Spinner Swivel (Size 11)
- Shrink Tube or Kicker
- Micro Ring Swivel (on the hook shank)
- Bait Screw (for the pop-up)

### Construction
1. Attach the Spinner Swivel to the eye of the hook.
2. Cover the connection with Shrink Tube/Kicker to stiffen it.
3. Slide a hook bead and micro ring swivel onto the hook shank.
4. Tie your boom material (stiff fluorocarbon) to the other end of the spinner swivel.`
  },
  {
    id: 'rig-hair',
    title: 'The Hair Rig',
    category: 'Rigs & Knots',
    summary: 'The revolution that changed carp fishing forever.',
    content: `## The Hair Rig

### Concept & Mechanics
The Hair Rig separates the bait from the hook. The bait is mounted on a small piece of line (the "hair") extending from the hook shank.
**Why it works**: When a fish sucks in the bait, it inhales the bare hook too. If it tries to blow the bait out, the hook pricks the lip.

### Component List
- Hook (Size 6-10)
- Hooklink material (Braid or coated braid)
- Bait stop
- Knotless Knot

### Step-by-Step Construction
1. Tie a small loop at the end of your hooklink (this holds the bait stop).
2. Thread your hooklink through the back of the hook eye.
3. Set the hair length (bait should be 5mm-10mm from the hook bend).
4. Whip the line around the shank 7-8 times (Knotless Knot).
5. Pass the line back through the eye.`
  },
  {
    id: 'rig-method',
    title: 'The Method Feeder',
    category: 'Rigs & Knots',
    summary: 'A deadly effective tactic for commercial fisheries.',
    content: `## The Method Feeder

### Concept & Mechanics
A flat lead/frame loaded with sticky pellets or groundbait. The hookbait is buried *inside* the ball of feed.
**Why it works**: The fish finds a pile of food with your hookbait right in the center. It creates intense competition.

### Step-by-Step Construction
1. Thread the feeder onto your main line.
2. Tie a swivel to the end of the line. Pull the swivel into the feeder body (semi-fixed).
3. Attach your short 4-inch hooklink to the swivel.
4. Put hookbait in the mould, fill with pellets, press feeder in, and release.`
  },
  {
    id: 'knot-knotless',
    title: 'Knotless Knot',
    category: 'Rigs & Knots',
    summary: 'The essential knot for tying hair rigs.',
    content: `## Knotless Knot

### Concept & Mechanics
Technically a "whipping" rather than a knot, it retains extremely high strength because the line is never strangled upon itself. It also dictates the angle at which the hook sits.

### Step-by-Step Construction
1. Pass the line through the **front** of the hook eye.
2. Adjust your hair length.
3. Whip the line down the shank, away from the eye, ensuring the line stays tight. Whip 7 to 10 times.
4. Pass the tag end back through the **back** of the hook eye.
5. Pull tight. This creates an aggressive angle that helps the hook flip into the fish's lip.`
  },
  {
    id: 'knot-palomar',
    title: 'Palomar Knot',
    category: 'Rigs & Knots',
    summary: 'Strong, reliable, and easy to tie. The gold standard for swivels and hooks.',
    content: `## Palomar Knot

### Concept & Mechanics
Known for retaining almost 100% of line strength. It doubles the line through the eye of the hook/swivel.

### Step-by-Step Construction
1. Double about 6 inches of line and pass the loop through the eye of the hook.
2. Tie a simple overhand knot with the doubled line, leaving the hook hanging in the middle.
3. Pass the loop over the entire hook/lure.
4. Moisten the line and pull tight.
5. Trim the tag end.`
  },
  {
    id: 'knot-grinner',
    title: 'Grinner Knot (Uni Knot)',
    category: 'Rigs & Knots',
    summary: 'A reliable knot for attaching swivels, especially with braid or fluorocarbon.',
    content: `## Grinner Knot

### Concept & Mechanics
Also known as the Uni Knot. Unlike the blood knot, it does not crush the line against itself, making it much stronger and less prone to slipping.

### Step-by-Step Construction
1. Pass the line through the eye of the swivel twice (optional, for strength) or once.
2. Form a loop with the tag end alongside the main line.
3. Pass the tag end through the loop and around the main line 5 times.
4. Moisten and pull the tag end to tighten the knot coils.
5. Slide the knot down to the swivel eye.`
  },
  {
    id: 'knot-figure8',
    title: 'Figure of Eight Loop',
    category: 'Rigs & Knots',
    summary: 'The strongest way to tie a loop at the end of your line.',
    content: `## Figure of Eight Loop

### Concept & Mechanics
Essential for "Loop-to-Loop" connections (e.g., attaching a hooklink to a swivel or mainline). It sits straight and does not slip.

### Step-by-Step Construction
1. Fold the line over to create a bight (loop).
2. Form a loop with the doubled line.
3. Twist the loop once (360 degrees).
4. Pass the end of the doubled line through the loop.
5. Moisten and tighten. It should look like an '8'.`
  },
  {
    id: 'guide-hooks',
    title: 'Hook Patterns & Types',
    category: 'Rigs & Knots',
    summary: 'A guide to understanding hook patterns, sizes, and applications.',
    content: `## Hook Patterns & Types

Choosing the right hook is arguably the most critical decision in your rig.

### The Scale of Sizes
In the UK, hook sizes are inverse: **The larger the number, the smaller the hook.**
- **Size 2 - 4**: Very large. For Specimen Carp or Pike.
- **Size 6 - 8**: Standard Carp and Barbel sizes (Boilies/Meat).
- **Size 10 - 12**: General purpose (Tench, Bream, large baits).
- **Size 14 - 16**: Maggots, Casters, Sweetcorn.
- **Size 18 - 22**: Tiny hooks for delicate baits (Pinkies/Bloodworm).

### Common Patterns
1. **Wide Gape**: The most versatile pattern. A wide distance between the point and the shank ensures better hook holds.
   * *Best For*: Bottom baits, wafters, and general hair rigs.
2. **Curve Shank**: The shank sweeps in a curve. This causes the hook to flip and turn aggressively in the fish's mouth.
   * *Best For*: Spinner rigs, Ronnie rigs, and pop-ups.
3. **Long Shank**: Has an extended shank. Very difficult for a fish to eject ("blow out").
   * *Warning*: Can cause damage if not used correctly. Often requires shrink tube.
4. **Chod / Stiff Rig**: Features an out-turned eye.
   * *Best For*: Stiff filament lines (Fluorocarbon/Bristle Filament) to prevent the line closing the gape.
5. **Crystal / Fine Wire**: Made from thinner wire to be lighter.
   * *Best For*: Silverfish (Roach/Rudd) where bait presentation must be natural.

### Barbed vs Barbless
- **Barbed**: Offers a more secure hold but harder to remove.
- **Barbless**: **Mandatory** on 90% of UK commercial fisheries. Easier to unhook and causes less damage to the mouth.`
  },
  {
    id: 'tackle-baitdropper',
    title: 'Bait Dropper',
    category: 'Rigs & Knots',
    summary: 'The essential river tool for depositing feed accurately on the bottom.',
    content: `## Bait Dropper

### Concept & Mechanics
A weighted metal or plastic container with a hinged lid. It attaches to your fishing line. The lid is held closed by a latch that only releases when the dropper hits the riverbed.
**Why it works**: In flowing water (rivers), loose feed thrown by hand will drift downstream in the current, landing yards away from your hookbait. A bait dropper punches through the current and deposits the food *exactly* where you want it—right on the bottom.

### Uses
- **River Fishing**: Critical for targeting Barbel and Chub in deep or fast water.
- **Specific Baits**: Perfect for small particles like hemp, casters, and maggots that are easily swept away.
- **Chopped Worm**: Delivering a concentration of chopped worms for Perch.

### Tactics
1. **The Carpet Feed**: Cast the dropper 5-10 times at the start of the session to lay a bed of hemp. Fish your hookbait right over the top.
2. **Top-Up**: Introduce one dropper full of bait every 30-60 minutes to keep the scent trail going without overfeeding.
3. **Accuracy**: Clip up your line on the reel spool to ensure you drop the bait at the exact same distance every time.

### Step-by-Step Usage
1. Attach the dropper to your mainline (or a dedicated heavy rod).
2. Open the lid, fill with bait (e.g., hempseed).
3. Close the lid and engage the latch.
4. Cast out. Feel the lead weight hit the bottom.
5. Wait 5-10 seconds to ensure it empties.
6. Retrieve quickly.`
  },

  // --- BAIT LIBRARY ---
  {
    id: 'bait-maggots',
    title: 'Maggots',
    category: 'Bait Library',
    summary: 'The universal coarse fishing bait.',
    content: `## Maggots

### Profile
The most common and versatile live bait, attracting nearly all species including **Roach, Perch, Bream, and Carp**.
- **Colors**: Available in White, Red, and Bronze.
- **Sizes**: Standard maggots, or smaller "Pinkies" and "Squats".

### Preparation
Keep them cool/refrigerated to stop them turning into casters (pupae). Clean them in maize flour to remove ammonia smell.

### Application
- **Single Maggot**: Size 20 hook for small silverfish.
- **Bunch of Maggots**: Size 14-16 hook for Chub, Perch, or Carp.
- **Maggot Feeder**: A plastic feeder with holes that releases maggots slowly.
- **Disco Maggot**: Mixing red and white maggots on the hook for visual contrast.`
  },
  {
    id: 'bait-casters',
    title: 'Casters',
    category: 'Bait Library',
    summary: 'The crunchy chrysalis stage of the maggot, deadly for quality fish.',
    content: `## Casters

### Profile
As a maggot ages, it turns into a chrysalis (caster). They have a crunchy shell and a soft protein center. They range from light brown (fresh, sinking) to dark black (old, floating).

### Preparation
You can buy them or make them. To make: riddle maggots daily. Store fresh casters in water or a damp bag in the fridge to stop them turning too dark.

### Application
- **The Crunch**: The sound of fish crunching casters stimulates feeding.
- **Floating Casters**: Dark ones float. Use them hooked with a sinking one to create a slow-sinking counter-balanced bait.
- **Cocktail**: A caster paired with a hemp seed is a classic Roach bait.`
  },
  {
    id: 'bait-worms',
    title: 'Worms',
    category: 'Bait Library',
    summary: 'A natural, scent-filled option for larger fish.',
    content: `## Worms

### Types
- **Lobworms**: Large garden worms. Ideal for targeting big **Perch, Chub, Barbel, and Tench**.
- **Dendrobaenas**: Smaller and very wriggly, suitable for general coarse fishing.
- **Brandlings**: Small, reddish-brown worms with yellow stripes. Best for **Perch, Grayling, Roach, and Rudd**.

### Tips
- **Chopped Worm**: A fantastic way to release scent into the swim. Use scissors to chop them into a pot of soil/groundbait before feeding.
- **The Kebab**: Threading multiple worm sections onto a hair rig creates a writhing mass that small fish cannot easily strip.`
  },
  {
    id: 'bait-corn',
    title: 'Sweetcorn',
    category: 'Bait Library',
    summary: 'Cheap, visible, and effective for almost every species.',
    content: `## Sweetcorn

### Profile
High visibility (yellow), sweet taste, and soft texture. Effective for **Carp, Tench, and Bream**.
- **Artificial**: Artificial buoyant versions (e.g., ESP Buoyant Sweetcorn) are available for balancing rigs.

### Application
- **Hookbait**: Thread 1 or 2 grains directly onto the hook (size 16-12) or hair rig 2-3 grains.
- **Feed**: Loose feed a handful over your float or feeder line.
- **Skins**: Squeezing the middle out of the corn leaves just the skin. This is extremely light and works well for shy Crucian Carp.`
  },
  {
    id: 'bait-pellets',
    title: 'Pellets',
    category: 'Bait Library',
    summary: 'Nutrient-rich, pre-prepared baits that mimic fish feed.',
    content: `## Pellets

### Overview
Commercially available baits popular in commercial fisheries. They come in various sizes (2mm to 8mm are common).
- **Hard Pellets**: Used for loose feeding or on a hair rig (with a bait band).
- **Soft/Expander Pellets**: Soft enough to hook directly.
- **Activated**: Some pellets (e.g., Mainline Match Activated) release a scent cloud to attract fish quickly.

### Application
- **Soaking**: Soak micros (2mm) for 2 minutes to soften them for molding around a Method Feeder.
- **Band'um**: A dumbbell shaped pellet designed to sit perfectly in a bait band.`
  },
  {
    id: 'bait-boilies',
    title: 'Boilies',
    category: 'Bait Library',
    summary: 'Round, boiled baits designed primarily for carp fishing.',
    content: `## Boilies

### Profile
Typically made with fishmeal and proteins. They are durable (resist small fish) and come in endless flavors.
- **Bottom Baits**: Sink to the lake bed.
- **Pop-ups**: Float off the bottom (for Chod/Ronnie rigs).
- **Wafters**: Critically balanced to counteract the weight of the hook.

### Usage
Essential for specimen Carp, but smaller sizes (8mm-12mm) work for Tench and Barbel.
- **Crumbing**: Crushing boilies increases the surface area and scent leakage.`
  },
  {
    id: 'bait-tigernuts',
    title: 'Tiger Nuts',
    category: 'Bait Library',
    summary: 'A sweet, crunchy nut that carp find irresistible.',
    content: `## Tiger Nuts

### Profile
Not actually a nut, but a tuber. They are incredibly crunchy and taste sweet. They are "selective" – small silverfish usually leave them alone, making them great for big Carp.

### Preparation (CRITICAL)
**Danger**: Unprepared nuts can expand in the gut and kill fish.
1. **Soak**: 24 hours in water (add sugar/talin).
2. **Boil**: 30 minutes vigorously.
3. **Ferment**: Leave them in the cooking liquid for days until the liquid turns to a slimy jelly. This jelly is pure attraction.

### Application
- **Balanced**: Drill a hole and insert cork to balance it.
- **Crushed**: Crush them to release attraction without feeding the fish too much.`
  },
  {
    id: 'bait-meat',
    title: 'Luncheon Meat',
    category: 'Bait Library',
    summary: 'Oily and aromatic bait for river and lake specimens.',
    content: `## Luncheon Meat

### Profile
Oily and releases attractants well in the water. Very effective for larger species like **Barbel, Chub, and Carp**.

### Application
- **Cubes**: Cut into cubes (6mm-12mm) and hair rigged or hooked directly.
- **Flavoring**: Can be dusted in spices (turmeric, paprika) or glugged in oil.
- **River Fishing**: The weight of meat helps it hold bottom in a flow.
- **Meat Punch**: Using a punch creates uniform cylinders that are aerodynamic.`
  },
  {
    id: 'bait-paste',
    title: 'Paste',
    category: 'Bait Library',
    summary: 'Soft, high-leakage bait that moulds around the hook.',
    content: `## Paste

### Profile
A dough-like bait made from ground pellets, fishmeal, or boilie base mix. It has no skin, so it releases scent instantly into the water column.

### Application
- **Pole Fishing**: Mould a lump around the hook. The float lifts when the paste dissolves or is eaten.
- **Wrap**: Wrap paste around a boilie (corkball pop-up) or lead ("paste bomb") to add attraction.

### Species
Deadly for Carp in summer and Chub (Cheese Paste) in winter.`
  },
  {
    id: 'bait-groundbait',
    title: 'Groundbait',
    category: 'Bait Library',
    summary: 'Finely milled mix used to attract fish to your area.',
    content: `## Groundbait

### Overview
A powder mix that you dampen with water to form balls. It creates an active feeding zone (your "swim").
- **Ingredients**: Often contains breadcrumbs, fishmeal, crushed hemp, or sweet biscuit.
- **Example**: Sonubaits Salted Caramel Groundbait is praised for its high attractant level.

### Usage
- **Ball it in**: Throw balls of groundbait to carpet the bottom.
- **Feeder**: Plug ends of a cage feeder.
- **Carriers**: Mix maggots or pellets into the groundbait to hold fish in the area.
- **Consistency**: Dry mix explodes on impact (shallow fishing); wet mix sinks to the bottom (deep fishing).`
  },
  {
    id: 'bait-bread',
    title: 'Bread',
    category: 'Bait Library',
    summary: 'Inexpensive and versatile classic.',
    content: `## Bread

### Application
- **Floating Crust**: Deadly for surface-feeding carp in summer. Dip quickly in water to add casting weight.
- **Flake**: Pinch white bread around the hook shank for Roach and Chub in winter. Fluff up the edges to look natural.
- **Liquidised**: Blend bread into fine crumbs for an excellent clouding groundbait.
- **Visibility**: Highly visible white color makes it easy for fish to spot.`
  },
  {
    id: 'bait-prawns',
    title: 'Prawns & Mussels',
    category: 'Bait Library',
    summary: 'Seafood baits for specific specimen hunting.',
    content: `## Prawns & Mussels

### Prawns
Peeled, uncooked prawns are fantastic for **Perch and Carp**. Their fleshy texture and strong scent are distinct from fishmeal boilies. Buy frozen supermarket prawns.

### Mussels
Saltwater mussels (shelled) can be very effective for **Tench**, which naturally feed on freshwater snails. They are tough enough to stay on the hook.`
  },
  {
    id: 'bait-hemp',
    title: 'Hempseed',
    category: 'Bait Library',
    summary: 'A powerful attractor that holds fish in the swim for hours.',
    content: `## Hempseed

### Profile
Small, black, oily seeds that look like tiny water snails. They have a nutty aroma.

### Preparation
Must be cooked! Soak for 24 hours, then boil until the white "germ" splits from the black shell (approx 30 mins).
**Warning**: Uncooked hemp can kill fish.

### Application
- **Loose Feed**: Spray hemp over the swim constantly to keep fish searching.
- **On the Hook**: Use a specialized hemp hook or glue onto a hair.`
  },
  {
    id: 'bait-liquids',
    title: 'Liquids & Glugs',
    category: 'Bait Library',
    summary: 'Boosters to enhance the attraction of any bait.',
    content: `## Liquids & Glugs

### Overview
Liquids are used to soak boilies, pellets, or mix into groundbait to create a stronger scent trail.

### Types
- **Oils**: (Salmon Oil, Hemp Oil). Great for summer. They rise to the surface creating a "slick" that flattens the water, indicating fish are feeding. Avoid in winter (congeals).
- **Goo/Gels**: Thick, sticky liquids that cling to the bait and create a visual cloud (smoke) in the water.
- **Alcohol-based**: Great for winter as they disperse well in cold water.`
  },

  // --- WATERCRAFT ---
  {
    id: 'watercraft-reading',
    title: 'Reading the Water',
    category: 'Watercraft',
    summary: 'Observation, analysis, and adaptation are the keys to success.',
    content: `## Reading the Water

### Essential Observations
- **Bubbles & Fizzing**: Random streams of bubbles are key signs of feeding fish (Carp/Tench) rooting in silt.
- **Surface Activity**: Look for rolling fish, swirls, or full jumps.
- **Birdlife**: Diving birds (Tufted Ducks) often gather where fish are active. A sudden scattering of waterfowl can indicate a large predator (Pike) or Carp moving through.
- **Natural Features**: Fish seek shelter. Target overhanging trees, reedbeds, and submerged structures.
- **Margins**: Do not overlook the edge! Large fish often patrol a rod-length from the bank.

### Vantage Points
Use high ground to spot fish. **Polarised sunglasses** are essential to cut glare and see beneath the surface.`
  },
  {
    id: 'watercraft-weather',
    title: 'Weather & Conditions',
    category: 'Watercraft',
    summary: 'Adapting to environmental factors like temperature, flow, and wind.',
    content: `## Adapting to Conditions

### Water Temperature
- **Cold (Winter)**: Fish are less active. They seek deeper, more stable zones.
- **Warm (Summer)**: Fish are active but may seek cooler, oxygenated water (weirpools, inlets) during the heat of the day.

### Water Clarity
- **Clear Water**: Fish are cautious. Use lighter lines and natural baits.
- **Murky/Colored Water**: Fish rely on scent. Use strong-smelling baits (Spicy meat, smelly pellets).

### Flow and Current (Rivers)
Fish position themselves in "current breaks" to conserve energy while waiting for food. Target **eddy pools** behind obstructions or the "seam" where fast water meets slow water.

### Wind Direction
On stillwaters, a consistent wind pushes warm surface water and food to the **windward bank**. This is often the most productive side to fish.`
  },
  {
    id: 'watercraft-feature-finding',
    title: 'Feature Finding & Plumbing',
    category: 'Watercraft',
    summary: 'Mastering the art of mapping the lake bed to find feeding spots.',
    content: `## Feature Finding

You cannot catch what is not there. Finding the right spot is 90% of the battle.

### Tools of the Trade
- **Marker Float**: A large, buoyant float setup used to explore the depths and texture of the bottom at range.
- **Plummet**: A heavy weight attached to the hook for precise depth measurement under the rod tip (float fishing).
- **Leading Around**: Casting a bare lead to "feel" the drop.

### The "Donk" Test
When casting a lead or marker:
1. **Hard Donk**: The lead hits hard gravel or clay instantly. The rod tip jars. This is a clean feeding area.
2. **Soft Landing**: The lead sinks into silt or lands on weed. The impact is cushioned.

### Key Features to Locate
- **Plateau**: A raised area of the lake bed. Fish patrol the edges.
- **Drop-off**: Where shallow water suddenly becomes deep. A classic patrol route.
- **Gravel Bars**: Strips of gravel often surrounded by silt or weed.
- **The Margins**: The shelf immediately next to the bank. Often the most overlooked feature.`
  },
  {
    id: 'watercraft-bottom-types',
    title: 'Understanding Bottom Types',
    category: 'Watercraft',
    summary: 'Decoding what lies beneath: Silt, Gravel, Weed, and Clay.',
    content: `## Decoding the Lake Bed

Different species favor different substrates. Adjust your rig accordingly.

### Gravel
- **Feel**: A rattle or vibration as you pull the lead back.
- **Significance**: Often clean, hard areas where fish have fed frequently. Excellent for presenting bottom baits.
- **Rig Choice**: Inline leads, short hooklinks.

### Silt
- **Feel**: A smooth, consistent resistance. The lead may stick initially (pulling out of the mud).
- **Significance**: Rich in natural food like **bloodworm**. Carp love deep, smelly silt.
- **Rig Choice**: Helicopter rigs or Chod rigs to prevent the lead pulling the hookbait into the mud.

### Weed
- **Feel**: Heavy, locking resistance. The rod bends, and retrieval is difficult.
- **Significance**: Fish feel safe here. It is a natural larder of snails and insects.
- **Rig Choice**: Strong gear! Solid PVA bags or Chod rigs to sit gently on top of the weed.

### Clay
- **Feel**: The lead "skids" or feels sticky but smooth.
- **Significance**: Often found on the slopes of bars. Can be very slippery but generally clean.`
  },
  {
    id: 'watercraft-naturals',
    title: 'Natural Food & Hatches',
    category: 'Watercraft',
    summary: 'A calendar of natural food: Bloodworm, Mayfly, Daphnia, and when they occur.',
    content: `## The Natural Larder

Fish do not rely on boilies; they rely on nature. Understanding what natural food is present and *when* it appears is the key to catching specimen fish.

### 1. The Midge (Bloodworm & Buzzer)
The most important food source in stillwaters.
- **Bloodworm (Larva)**: Lives in the silt. Bright red. Fish root for these 24/7.
- **Buzzer (Pupa)**: As they migrate to the surface to hatch.
    - **Timing**: Peaks in **Spring (April/May)** but occurs year-round. Huge hatches occur at **dusk** and **dawn**.
    - **Tactic**: **Zig Rigs** suspended in mid-water are deadly during a buzzer hatch. Black foam is the best imitation.

### 2. The Mayfly (*Ephemera danica*)
The largest and most spectacular up-winged fly.
- **Timing**: Late **May to early June** (known as "Duffers' Fortnight").
- **Effect**: Fish become preoccupied. Large Chub, Trout, and even Roach will ignore bottom bait to take Mayflies off the surface.
- **Lifecycle**: Nymphs burrow in silt -> Swim to surface -> Hatch into Dun -> Return to lay eggs (Spinner).

### 3. Caddis Fly
Sedge species.
- **Larva**: Live on the bottom in protective cases made of sand, sticks, or stones.
- **Timing**: **Late Summer/Autumn**.
- **Observation**: If you catch a fish and it excretes "grit", it has been crunching on caddis larvae.

### 4. Daphnia (Water Fleas)
Microscopic crustaceans that form clouds in the water.
- **Timing**: **High Summer** during algal blooms.
- **Effect**: Shoals of Bream and Carp will swim mid-water with mouths open, filter-feeding. Bottom baits become useless.
- **Tactic**: Use high-visibility pop-ups or Zigs in the upper layers to target filter-feeders.

### 5. Freshwater Snails
- **Habitat**: Found clinging to weed stems and on gravel bars.
- **Timing**: **Summer/Autumn** when weed growth is maximum.
- **Predators**: Big Tench and Carp ("Crunchers") love these. Use hemp to mimic small snails.

### 6. Fry (Baby Fish)
- **Timing**: **June/July** (Post-spawning).
- **Effect**: Perch and Pike gorge on millions of tiny Roach/Perch fry in the margins.
- **Tactic**: Switch to small silver spinners or fry-imitation lures (dropshot).`
  }
];
