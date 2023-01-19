export const SidebarTab = ({ image, tabTitle, badge }) => {
  return (
    <div className="flex px3- py-2 justify-between items-center text-base text-gray-700 font-medium">
      <div className="flex items-center">
        <img src={image} />
        <span className="text-base text-gray-700 font-medium ml-3.5">{tabTitle}</span>
      </div>
      {badge ? (
        <span className="bg-gray-100 px-2.5 py-0.5 rounded-2xl text-sm">{badge}</span>
      ) : null}
    </div>
  );
};
