export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

//------------------------------------------------------
// SELECTION SORT
//------------------------------------------------------

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  selectionSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function selectionSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  for (let i = 0; i < mainArray.length; i++) {
    let min = i;
    for (let j = i + 1; j < mainArray.length; j++) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (less(mainArray[j], mainArray[min])) min = j;
    }

    let swap = mainArray[i];
    animations.push([i, min]);
    animations.push([i, min]);
    animations.push([i, mainArray[min]]);
    mainArray[i] = mainArray[min];
    animations.push([i, min]);
    animations.push([i, min]);
    animations.push([min, swap]);
    mainArray[min] = swap;
    // exchange(mainArray, i, min, animations);
  }
}

function less(v, w) {
  if (v < w) {
    return true;
  } else return false;
  // if (v === 0) return 0;
  // else return -1;
}

function exchange(a, i, j, animations) {
  let swap = a[i];
  a[i] = a[j];
  a[j] = swap;
}
