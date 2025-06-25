<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>List Your Ad Space – The Ad Project</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Inter', sans-serif; }
    .step { display: none; }
    .step.active { display: block; }
  </style>
</head>
<body class="bg-gradient-to-br from-indigo-950 via-purple-900 to-black text-white">
  <div class="max-w-3xl mx-auto px-4 py-12">
    <div class="bg-zinc-900 shadow-2xl border border-purple-800 rounded-3xl overflow-hidden">
      <div class="px-6 py-8 border-b border-purple-700 text-center">
        <h2 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse">📸 List Your Ad Space</h2>
        <p class="text-sm text-gray-300 mt-1">Just 3 Steps to Start Earning from Your Property</p>
      </div>

      <form id="listingForm" class="p-8 space-y-10">

        <!-- Step 1 -->
        <div class="step active" id="step1">
          <div class="space-y-6">
            <div>
              <label class="block text-purple-300 font-semibold">Listing Title *</label>
              <input type="text" required class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="e.g. Billboard on Rooftop near Railway Station" />
            </div>

            <div>
              <label class="block text-purple-300 font-semibold">Type of Ad Space *</label>
              <select required class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg">
                <option value="">Select ad space type</option>
                <option>Wall</option>
                <option>Hoarding</option>
                <option>Auto Rickshaw</option>
                <option>Shop Front</option>
                <option>Bus</option>
                <option>Mall</option>
                <option>Rooftop</option>
                <option>Digital Screen</option>
              </select>
            </div>

            <div>
              <label class="block text-purple-300 font-semibold">Location *</label>
              <input type="text" required class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="e.g. MG Road, Bengaluru" />
            </div>

            <button type="button" onclick="nextStep(2)" class="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black p-3 rounded-xl text-lg font-bold hover:scale-105 transition">Next →</button>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="step" id="step2">
          <div class="space-y-6">
            <div>
              <label class="block text-purple-300 font-semibold">Upload 1–3 Images *</label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="file" required accept="image/*" class="p-2 bg-zinc-800 text-white border border-purple-600 rounded-lg">
                <input type="file" accept="image/*" class="p-2 bg-zinc-800 text-white border border-purple-600 rounded-lg">
                <input type="file" accept="image/*" class="p-2 bg-zinc-800 text-white border border-purple-600 rounded-lg">
              </div>
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-purple-300 font-semibold">Length (ft)</label>
                <input type="number" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="e.g. 10" />
              </div>
              <div>
                <label class="block text-purple-300 font-semibold">Width (ft)</label>
                <input type="number" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="e.g. 8" />
              </div>
            </div>

            <div>
              <label class="block text-purple-300 font-semibold">Short Description</label>
              <textarea class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" rows="3" placeholder="Describe visibility, traffic, nearby landmarks, etc."></textarea>
            </div>

            <div class="flex justify-between">
              <button type="button" onclick="prevStep(1)" class="bg-gray-600 text-white px-6 py-2 rounded-xl hover:bg-gray-700">← Back</button>
              <button type="button" onclick="nextStep(3)" class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-black px-6 py-2 rounded-xl font-bold hover:scale-105">Next →</button>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="step" id="step3">
          <div class="space-y-6">
            <div>
              <label class="block text-purple-300 font-semibold">Monthly Rent (₹)</label>
              <input type="number" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="e.g. 20000" />
            </div>

            <div class="grid grid-cols-2 gap-6">
              <div>
                <label class="block text-purple-300 font-semibold">Available From</label>
                <input type="date" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" />
              </div>
              <div>
                <label class="block text-purple-300 font-semibold">Available To</label>
                <input type="date" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" />
              </div>
            </div>

            <div>
              <label class="block text-purple-300 font-semibold">Contact Number *</label>
              <input type="tel" required class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="+91 9876543210" />
            </div>

            <div>
              <label class="block text-purple-300 font-semibold">Email Address</label>
              <input type="email" class="w-full mt-1 p-3 bg-zinc-800 text-white border border-purple-600 rounded-lg" placeholder="your@email.com" />
            </div>

            <div class="flex items-center">
              <input type="checkbox" required class="mr-2 border-purple-600" />
              <label class="text-gray-300 text-sm">I am the legal owner or have permission to list this space.</label>
            </div>

            <div class="flex justify-between mt-6">
              <button type="button" onclick="prevStep(2)" class="bg-gray-600 text-white px-6 py-2 rounded-xl hover:bg-gray-700">← Back</button>
              <button type="submit" class="bg-gradient-to-r from-green-400 via-lime-500 to-emerald-500 text-black px-6 py-2 rounded-xl font-bold hover:scale-105">✅ Submit Listing</button>
            </div>
          </div>
        </div>

      </form>
    </div>
  </div>

  <script>
    function nextStep(step) {
      document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
      document.getElementById('step' + step).classList.add('active');
    }
    function prevStep(step) {
      nextStep(step);
    }
  </script>
</body>
</html>
