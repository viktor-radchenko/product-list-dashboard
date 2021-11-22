export const Stats = ({ total, deleted, toggleTabs }) => {
  return (
    <div className="dashboard__stats">
      <button type="text" onClick={() => toggleTabs(false)}>
        Total: {total}
      </button>
      <button type="text" onClick={() => toggleTabs(true)}>
        Deleted: {deleted}
      </button>
    </div>
  );
};
